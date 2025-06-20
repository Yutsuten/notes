---
title: Pulse
ref: https://trac.ffmpeg.org/wiki/Capture/PulseAudio
---

## Overview

Enable pulse input device with `-f pulse`.
Check available audio devices with:

```shell
pactl list short sources
```

Or use `default` for *probably* your mic.

:::info
Use `wav` (max 4GiB) or `w64` to record lossless with WAV.
:::

After recording with `-f pulse`, PTS may become out-of-sync.
When re-encoding, use this option (generate timestamps by counting sample):

```shell
ffmpeg bad-pts.m4a -af 'asetpts=N/SR/TB' good-pts.mp4
```

### Record from speakers

Your speakers is probably stereo, so use `-ac 2`.

```shell
ffmpeg -f pulse -i alsa_output.pci-0000_2f_00.4.analog-stereo.monitor -ac 2 output.w64
```

### Record from virtual device

You may create a virtual device to be able to select the applications (with `pavucontrol`) you want
to record the audio.
Check [Pipewire or Pulseaudio notes](/tool/linux/audio/pipewire?search=linux+audio) for the steps.

Choose a source put its name as the `-i` parameter:

```shell
ffmpeg -f pulse -i recording.monitor -ac 2 output.w64
```

### Record microphone

Most microphones are mono, so you should use `-ac 1` to avoid issues
(like hearing only on the left side when playing the audio).

```shell
ffmpeg -f pulse -i alsa_input.pci-0000_2f_00.4.analog-stereo -ac 1 output.w64
```

## Raw recording

To record raw (see more in the audio/raw notes):

```shell
ffmpeg -f pulse -i recording.monitor -ac 2 -f s16le -acodec pcm_s16le audio.raw
```
