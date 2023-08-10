---
title: Filter
ref: https://ffmpeg.org/ffmpeg-filters.html
---

## Audio filtering

Apply audio filter with `-filter:a` or its alias `-af`.

### Volume

([Wiki](https://trac.ffmpeg.org/wiki/AudioVolume))
Use the `volume` audio filter to increase or reduce the volume of the audio.
Allowed values are:

- A float value: `1.5` (50% increase)
- A dB value: `15dB`

```shell
ffmpeg -i low_volume.m4a -af 'volume=15dB' adjusted.m4a
```

### Fade

Use the `afade` audio filter to fade the audio in or out.
Parameters:

- `st` is the start time, in seconds
- `d` is the duration, in seconds

Considering an 90 seconds long audio file,
fade in the first 1 second and fade out the last 1 second.

```shell
ffmpeg -i audio.m4a -af 'afade=in:0:d=1,afade=out:st=89:d=1' out.m4a
```

### Setpts

If recording with `-f pulse`, PTS may become out-of-sync.
When re-encoding, use this option (generate timestamps by counting sample):

```shell
ffmpeg  bad-pts.m4a -af 'asetpts=N/SR/TB' good-pts.mp4
```
