---
title: Pipewire
ref: https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/home
---

## Overview

A low-level multimedia framework.

Restart pipewire components with:

```shell
systemctl --user restart wireplumber pipewire pipewire-pulse
```

## Sample rate

Allowing both 44.1kHz and 48kHz may help fixing some cracklings.

```shell
cp /usr/share/pipewire/pipewire.conf ~/.config/pipewire/pipewire.conf
```

Add to `~/.config/pipewire/pipewire.conf` > `context.modules`:

```ini
default.clock.allowed-rates = [ 44100 48000 ]
```

## Nice level

For the time I'm writing this (2022/11/27),
the default `client-rt.conf` does not contain a default `nice.level`,
which makes applications that use pipewire directly (not through pipewire-pulse) have a lower priority.
`mpv`, for example, was having some audio cracklings.

```shell
cp /usr/share/pipewire/client-rt.conf ~/.config/pipewire/client-rt.conf
```

Add to `~/.config/pipewire/client-rt.conf` > `context.modules` > `libpipewire-module-rt`:

```shell
args = {
    nice.level    = -11
}
```

## Sink/source management

### List

List sources/sinks:

```shell
pactl list short sources
pactl list short sinks
wpctl status
```

### Default Sink

Copy the base pipewire-pulse configuration:

```shell
cp /usr/share/pipewire/pipewire-pulse.conf ~/.config/pipewire/pipewire-pulse.conf
```

Then append the following to `context.exec`:

```ini
context.exec = [
    { path = "/usr/bin/sh" args = "/path/to/pipewire-init.sh" }
]
```

Create the `pipewire-init.sh` with the command that sets the default sink
(and optionally add more initialization commands).

```shell
##!/usr/bin/sh
sleep 0.5
pactl set-default-sink alsa_output.pci-0000_2f_00.4.analog-stereo
```

#### Using pipewire (untested)

- [Reference](https://www.reddit.com/r/pipewire/comments/pdtsy9/making_the_a_bluetooth_device_the_default_sink/)

Add the following to `pipewire.conf`:

```ini
context.properties = {
    default.configured.audio.sink = { "name": "your_device_name" }
}
```

### Virtual Sink

- [Remap Sink Wiki](https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/Virtual-Devices#remap-sink)
- [Loopback Module Documentation](https://docs.pipewire.org/page_module_loopback.html)

Create a sink that can be selected in applications and that forwards the data to another sink.
Useful, for example, if you want to record audio from only one application.

To create the sink temporarily, run either:

```shell
pactl load-module module-remap-sink sink_name=recording
pw-loopback --name='Recording' --capture-props='media.class=Audio/Sink node.name=recording'
```

To create the sink permanently,
create `~/.config/pipewire/pipewire-pulse.conf.d/10-remap-sink.conf` and restart pipewire.

```ini
context.modules = [
    {   name = libpipewire-module-loopback
        args = {
            node.description = "Audio/Sink Recording"
            capture.props = {
                media.class      = "Audio/Sink"
                node.name        = recording
                audio.position   = [FL FR]
            }
            playback.props = {
                audio.position   = [FL FR]
            }
        }
    }
]
```

### Combine sources

- [Migrate PA: module-null-sink](https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/Migrate-PulseAudio#module-null-sink)
- [Virtual Devices Configuration](https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/Virtual-Devices#configuration)

#### 1) Create a null sink

To create the sink temporarily:

```shell
pactl load-module module-null-sink sink_name=mix
pw-cli create-node adapter factory.name=support.null-audio-sink media.class="Audio/Sink" object.linger=1 monitor.channel-volumes=1 node.name=mix
```

To create the sink permanently,
create `~/.config/pipewire/pipewire.conf.d/10-null-sink.conf` and restart pipewire.

```ini
context.objects = [
    {   factory = adapter
        args = {
            factory.name            = support.null-audio-sink
            media.class             = "Audio/Sink"
            node.name               = mix
            node.description        = "NullSink Mix"
            object.linger           = 1
            monitor.channel-volumes = 1
        }
    }
]
```

#### 2) Connect sources to the null sink

```shell
pactl load-module module-loopback sink=mix source=${speakers}
pactl load-module module-loopback sink=mix channels=2 channel_map=mono,mono source=${mic}
pw-loopback --capture=${speakers} --capture-props='stream.capture.sink=true' --playback=mix
pw-loopback --capture=${mic} --capture-props='audio.position=[FL] stream.dont-remix=true' --playback=mix --playback-props='audio.position=[MONO]'
```

The `mix` sink with have the audio of both sources.

_Note: `PIPEWIRE_NODE` environment variable seems to affect the `module-loopback` in a way that
makes it not work._
