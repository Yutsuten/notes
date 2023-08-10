---
title: Pulse
ref: https://trac.ffmpeg.org/wiki/Capture/PulseAudio
---

## Overview

Enable pulse input device with `-f pulse`.

As input file, use `default` for the default audio device.
To choose a device, list them with:

```shell
pactl list short sources
```

You may create a virtual device to be able to select the applications (with `pavucontrol`) you want
to record the audio.
Check [Pipewire or Pulseaudio notes](/tool/linux/audio/pipewire?search=linux+audio) for the steps.

Choose a source put its name as the `-i` parameter:

```shell
ffmpeg -f pulse -i recording.monitor -ac 2 output.w64
```

_Note: Use `wav` (max 4GiB) or `w64` to record lossless with WAV._

To record raw (see more in the audio/raw notes):

```shell
ffmpeg -f pulse -i recording.monitor -ac 2 -f s16le -acodec pcm_s16le audio.raw
```
