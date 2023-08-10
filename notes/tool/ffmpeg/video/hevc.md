---
title: Hevc
ref: https://trac.ffmpeg.org/wiki/Encode/H.265
---

## Overview

High Efficiency Video Coding (H.265).

## libx265

For a full list of options, run `ffmpeg -h encoder=libx265`.

Default H.265 codec, uses your CPU for processing.

| Option | Description |
| --- | --- |
| `-crf` | [0; 51] default 28. Constant Rate Factor, where 0 is lossless and 51 is worst quality possible. |
| `-preset` | Quality-speed tradeoff. Options: `ultrafast`, `superfast`, `veryfast`, `faster`, `fast`, `medium`, `slow`, `slower`, `veryslow` and `placebo`. |

### Constant Rate Factor (CRF)

Choose the desired CRF and preset.

```shell
ffmpeg -i input.mp4 -vcodec libx265 -acodec copy -r 60 -crf 20 -preset slow output.mp4
```

### Two-Pass Encoding

Decide the desired `file_size` in kBit (1 MiB = 8192 kBit) and get the video `duration` in seconds.
Get the bitrate with the formula `bitrate = file_size / duration`.
Pass the result to `-b` for both passes.

And as for CRF, choose the desired preset.

1. On the first pass, set `-y`, `-an`, `-x265-params pass=1`, `-f mp4` and output to `/dev/null`.
2. On the second pass, set `-x265-params pass=2`.

```shell
ffmpeg -y -i input.mp4 -vcodec libx265 -an -r 60 -b:v 720k -preset slow -x265-params pass=1 -f mp4 /dev/null && \
ffmpeg -i input.mp4 -vcodec libx265 -acodec copy -r 60 -b:v 720k -preset slow -x265-params pass=2 output.mp4
```

### Benchmark

Comparison when changing only the preset (using an old laptop).
Tested inputs:

1. Size: 638.0 MiB - Length: 3:50 - CRF 20
2. Size: 580.8 MiB - Length: 2:37 - CRF 10
3. Size: 580.8 MiB - Length: 2:37 - CRF 16

Encoding time - File size:

| Input     | 1                  | 2                   | 3                  |
| --------- | ------------------ | ------------------- | ------------------ |
| veryslow  | 3:46:18 - 74.8 MiB | 4:06:27 - 170.9 MiB | 3:09:24 - 79.8 MiB |
| slower    | 2:05:05 - 75.1 MiB | 2:38:03 - 171.0 MiB | 1:55:18 - 79.9 MiB |
| slow      | 0:30:09 - 77.3 MiB | 0:28:26 - 171.1 MiB | 0:24:23 - 81.2 MiB |
| medium    | 0:10:57 - 75.0 MiB | 0:10:37 - 159.3 MiB | 0:08:36 - 77.4 MiB |
| fast      | 0:09:44 - 76.1 MiB | 0:08:26 - 155.2 MiB | 0:07:25 - 77.8 MiB |
| faster    | 0:07:52 - 75.6 MiB | 0:07:05 - 154.3 MiB | 0:05:57 - 77.0 MiB |
| veryfast  | 0:07:39 - 75.8 MiB | 0:07:02 - 154.8 MiB | 0:05:55 - 77.3 MiB |
| superfast | 0:06:09 - 73.7 MiB | 0:05:23 - 138.3 MiB | 0:04:33 - 72.2 MiB |
| ultrafast | 0:04:21 - 74.1 MiB | 0:03:36 - 139.2 MiB | 0:03:07 - 73.3 MiB |

## hevc_nvenc

For a full list of options, run `ffmpeg -h encoder=hevc_nvenc`.

| Option | Description |
| --- | --- |
| `-vcodec` | Set to `hevc_nvenc`. |
| `-cq` | Target quality level. The range is 0-51. Similar to CRF? |
| `-preset` | Determines compression efficiency. Options: `losslesshp`, `lossless`, `llhp`, `llhq`, `ll`, `bd`, `hq`, `hp`, `fast`, `medium` and `slow`. |
