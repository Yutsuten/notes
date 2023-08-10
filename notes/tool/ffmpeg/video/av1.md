---
title: Av1
ref: https://trac.ffmpeg.org/wiki/Encode/AV1
---

## Overview

Open source & royalty-free video codec developed by the Alliance for Open Media (AOMedia).
It seems to give better results than HEVC.

## libaom-av1

For a full list of options, run `ffmpeg -h encoder=libaom-av1`.

| Option | Description |
| --- | --- |
| `-crf` | [0; 63] Constant Rate Factor, where 0 is best quality (not lossless) and 63 is worst quality possible. |
| `-cpu-used` | [0; 8] Quality-speed tradeoff. Lower is slower. HEVC slow ≈ 6-5, slower ≈ 3 |
| `-g` | Keyframe interval. A keyframe is inserted at least every N frames, sometimes sooner. |
| `-row-mt` | Enable row based multi-threading. Must have. |
| `-tiles` | Set the number of tiles to encode the input video with, as columns x rows. May decrease encoding efficiency. Start with `3x3` and adjust acordingly to the chosen `-cpu-used`. Must have. |

Due to [this issue](https://gitlab.com/AOMediaCodec/avm/-/issues/90),
I recommend using `-aom-params enable-warped-motion=0` to avoid the re-encoding process stopping in
the middle because of an error.
Will probably be fixed in v4.0.

For **Constant Rate Factor (CRF)**, choose between **One-Pass** and **Two-Pass**.

One-Pass:

```shell
ffmpeg -i input.mp4 -vcodec libaom-av1 -r 60 -crf 53 -cpu-used 2 -row-mt 1 -tiles 2x3 -g 600 -aom-params enable-warped-motion=0 output.mkv
```

Two-Pass (may give better results):

```shell
ffmpeg -i input.mp4 -vcodec libaom-av1 -r 60 -crf 53 -cpu-used 2 -row-mt 1 -tiles 2x3 -g 600 -aom-params enable-warped-motion=0 -pass 1 -f null /dev/null && \
ffmpeg -i input.mp4 -vcodec libaom-av1 -r 60 -crf 53 -cpu-used 2 -row-mt 1 -tiles 2x3 -g 600 -aom-params enable-warped-motion=0 -pass 2 output.mkv
```

## libsvtav1

For a full list of options, run `ffmpeg -h encoder=libsvtav1`.

| Option | Description |
| --- | --- |
| `-crf` | [0; 63] Constant Rate Factor, where 0 is best quality (not lossless) and 63 is worst quality possible. |
| `-preset` | [0; 13] Quality-speed tradeoff. Lower is slower. HEVC slow ≈ 6-5, slower ≈ 4 |
| `-g` | Keyframe interval. A keyframe is inserted at least every N frames, sometimes sooner. |
| `-pix_fmt` | Set pixel format. Only `yuv420p` `yuv420p10le` is supported. |

For **Constant Rate Factor (CRF)**, choose the desired CRF and preset:

```shell
ffmpeg -i input.mp4 -vcodec libsvtav1 -r 60 -crf 40 -preset 4 -g 600 -pix_fmt yuv420p output.mkv
```
