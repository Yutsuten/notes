---
title: Image2
ref: https://ffmpeg.org/ffmpeg-formats.html#image2-2
---

## Frame to image

Use `-ss` (frame to be extracted) with low `-t` to read only a small part of the video.

- `-frames:v 1`: Stop writing to the stream after framecount frames.
- `-update 1`: If set to 1, the filename will always be interpreted as just a filename,
not a pattern, and the corresponding file will be continuously overwritten with new images.
Default value is 0.

```shell
ffmpeg -ss 00:09.500 -t 0.1 -i input.mp4 -f image2 -update 1 -frames:v 1 -y output.png
```

:::tip
If the output filename is an image, `-f image2` is automatically selected and thus, optional.
:::
