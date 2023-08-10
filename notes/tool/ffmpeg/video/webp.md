---
title: Webp
ref: http://ffmpeg.org/ffmpeg-all.html#libwebp
---

## Overview

Generate animated images with higher quality and smaller sizes than GIF.

As GIF, these options also apply:

- `fps`: Frames per second, lower this to reduce GIF size
- `crop`: Crop part of the video
- `scale`: Use the default scaler `bicubic` or `lanczos`.

Webp-only options:

- `-lossless`: Whether to use lossy or lossless compression
- `-compression_level`: [0; 6] default=4. High is better quality.
- `-quality`: [0; 100] default=75. Only applies to lossy compression. High is better quality.

By default the animated image does not loop.

- `-loop`: 0 for infinite loop, >0 number of times to loop.

### Lossless

Only RGB is supported.

```shell
ffmpeg \
  -ss 00:10:29.100 -t 1.1 -i input.mp4 \
  -vf 'fps=25,crop=600:400:660:340' \
  -vcodec libwebp -lossless 1 -compression_level 6 -loop 0 \
  -y output.webp
```

### Lossy

Only YUV420 is supported.
Convert RGB to YUV with `-pix_fmt yuv420p`.

```shell
ffmpeg \
  -ss 00:10:29.100 -t 1.1 -i input.mp4 \
  -vf 'fps=25,crop=600:400:660:340' \
  -vcodec libwebp -lossless 0 -compression_level 6 -quality 85 -loop 0 -pix_fmt yuv420p \
  -y output.webp
```
