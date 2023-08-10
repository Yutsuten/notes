---
title: Gif
ref: https://stackoverflow.com/questions/42980663/ffmpeg-high-quality-animated-gif
---

## Overview

GIF is limited to a palette of 256 colors.
Choosing a good palette is key for creating high quality GIFs.

## Simple

By default, `ffmpeg` uses a generic palette that tries to cover the whole color space
in order to support the largest variety of content.

Using the default is the fastest way to create a GIF.
Some recommended adjusts:

- `fps`: Frames per second, lower this to reduce GIF size
- `crop`: Crop part of the video
- `scale`: Use the default scaler `bicubic` or `lanczos`.

```shell
ffmpeg \
  -ss 00:10:29.100 -t 1.1 -i input.mp4 \
  -vf 'fps=20,scale=500:-1:flags=lanczos' \
  output.gif
```

## Good Quality

The creation of the GIF is separated in 2 steps: Pallete Generation (`palettegen`) and GIF
Generation (`paletteuse`).

```shell
ffmpeg \
  -ss 00:10:29.100 -t 1.1 -i input.mp4 \
  -vf \
   'fps=20,scale=500:-1:flags=lanczos,split[v1][v2];
    [v1]palettegen=stats_mode=diff[palette];
    [v2][palette]paletteuse=dither=floyd_steinberg' \
  output.gif
```

Steps are explained bellow.

### Pallete Generation

There is one parameter that worth adjusting depending on the GIF to be generated, it is `stats_mode`.

- `stats_mode=full`
- `stats_mode=diff`

`full`: The default value.
All pixels will be part of the color statistics.
It favors static content at the cost of worst animations.

`diff`: Only the pixel that differs from previous frame will be accounted.
It favors moving content at the cost of worst static content.

```shell
ffmpeg \
  -ss 00:10:29.100 -t 1.1 -i input.mp4 \
  -vf 'fps=20,scale=500:-1:flags=lanczos,palettegen=stats_mode=diff' \
  /tmp/palette.png
```

### GIF Generation

To get the best out of the palette,
dithering is used.
The only predictable dithering available is bayer,
all the others are error diffusion based.

These options are recommended, in order:

- `dither=floyd_steinberg`
- `dither=sierra2_4a`
- `dither=bayer:bayer_scale=3`

Remember to keep the other options (`fps`, `scale`) the same as when you generated the palette.

```shell
ffmpeg \
  -ss 00:10:29.100 -t 1.1 -i input.mp4 \
  -i /tmp/palette.png \
  -vf \
   'fps=20,scale=500:-1:flags=lanczos[0v];
    [0v][1:v]paletteuse=dither=floyd_steinberg'
  output.gif
```
