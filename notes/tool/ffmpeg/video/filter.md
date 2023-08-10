---
title: Filter
ref: https://ffmpeg.org/ffmpeg-filters.html
---

## Video filtering

Apply video filter with `-filter:v` or its alias `-vf`.

### Scale

Resize the video to the specified `width` and `height`.
If `-1` is used, keep aspect ratio.

```shell
ffmpeg -i video.mp4 -vf 'scale=960:-1:flags=lanczos' rescaled.mp4
```

*Note: It is recommended to rescale using the default scaler `bicubic` or `lanczos`.*

### Crop

Crop a portion of a video.
Syntax: `crop=W:H:X:Y`

- `W`: Width of the output
- `H`: Height of the output
- `X`: Horizontal position from where to begin cropping
- `Y`: Vertical position from where to begin cropping

```shell
ffmpeg -i video.mp4 -vf 'crop=600:400:660:340' cropped.mp4
```

### Fade

Use the `fade` video filter to fade the video in or out.
Parameters:

- `st` is the start time, in seconds
- `d` is the duration, in seconds

Considering an 90 seconds long video file,
fade in the first 1 second and fade out the last 1 second.

```shell
ffmpeg -i video.mp4 -vf 'fade=in:0:d=1,fade=out:st=89:d=1' out.mp4
```
