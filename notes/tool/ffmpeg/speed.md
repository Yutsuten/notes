---
title: Speed
ref: https://trac.ffmpeg.org/wiki/How%20to%20speed%20up%20/%20slow%20down%20a%20video
---

## Lossless video speed manipulation

Consider a 30 FPS video,
and we want to convert it to 60 FPS losslessy.

First convert to raw bitstream format.

```shell
ffmpeg -i input.mp4 -map 0:v -an -c:v copy -bsf:v h264_mp4toannexb raw.h264
ffmpeg -i input.mp4 -map 0:v -an -c:v copy -bsf:v hevc_mp4toannexb raw.h265
```

**Video only:** Regenerate the video with new timestamps.

```shell
ffmpeg -fflags +genpts -r 60 -i raw.h264 -c:v copy output.mp4
```

**Video + Audio:** Regenerate the video with the audio stream speed also changed:

```shell
ffmpeg -fflags +genpts -r 60 -i raw.h264 -i input.mp4 -map 0:v -c:v copy -map 1:a -af atempo=2 -movflags faststart output.mp4
```

## Audio speed manipulation

Valid `atempo` values are between 0.5 and 100.

Example of doubling the speed:

```shell
ffmpeg -i input.flac -af atempo=2.0 output.flac
```
