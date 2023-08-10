---
title: Vp9
ref: https://trac.ffmpeg.org/wiki/Encode/VP9
---

## Overview

Open source & royalty-free video codec for WebM.

### libvpx-vp9

For a full list of options, run `ffmpeg -h encoder=libvpx-vp9`.

| Option | Description |
| --- | --- |
| `-crf` | [0; 63] Constant Rate Factor, where 0 is best quality (not lossless) and 63 is worst quality possible. Use `-b:v 0` to disable _Constrained Quality_ mode. |
| `-cpu-used` | [0; 5] Quality-speed tradeoff. Lower is slower. Usually use 0, or 1 if in a hurry. |
| `-tune-content` | Tune content type. Use `screen` for screen capture content, `film` for film content (improves grain retention). |
| `-row-mt` | Enable row based multi-threading. Improve speed by about 50%. |

### Constant Rate Factor

Two pass is recommended.

```shell
ffmpeg -i input.mp4 -vcodec libvpx-vp9 -r 60 -b:v 0 -crf 50 -tune-content screen -pix_fmt yuv420p -pass 1 -f null /dev/null && \
ffmpeg -i input.mp4 -vcodec libvpx-vp9 -r 60 -b:v 0 -crf 50 -tune-content screen -pix_fmt yuv420p -pass 2 -cpu-used 0 output.webm
```

_Note: Use `-pix_fmt yuv420p` to increase compatibility with mobile devices._
