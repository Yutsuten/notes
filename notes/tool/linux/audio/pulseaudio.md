---
title: Pulseaudio
ref: https://wiki.archlinux.org/index.php/PulseAudio
---

## Overview

A general purpose sound server.

Install `pulseaudio` and `pavucontrol`.

### List

List sources:

```shell
pactl list sources | grep Name
```

### Mono Audio

A new pulseaudio module must be added to have mono audio.

```shell
pacmd list-sinks | sed -nE 's/^\s*name: <(alsa.+)>$/\1/p'  # Add output to $master bellow
load-module module-remap-sink sink_name=mono sink_properties="device.description='Mono'" master=$master channels=2 channel_map=mono,mono"
```

To apply it temporarily,
prepend the command with `pacmd` and run in the terminal.

To apply it permanently,
copy the command to the end of `/etc/pulse/default.pa`.

Choose between stereo and mono using `pavucontrol` in the Playback tab.

### Combine sources

#### 1) Create a null sink

```shell
pactl load-module module-null-sink sink_name=mix
```

#### 2) Connect sources to the null sink

```shell
pactl load-module module-loopback sink=mix source=alsa_output.pci-0000_2f_00.4.analog-stereo.monitor
pactl load-module module-loopback sink=mix channels=2 channel_map=mono,mono source=alsa_input.pci-0000_2f_00.4.analog-stereo
```

The `mix` sink with have the audio of both sources.
