---
title: Filter complex
ref: https://superuser.com/questions/681885/how-can-i-remove-multiple-segments-from-a-video-using-ffmpeg
---

## Filter complex

Filter complex cannot be used with the simple filter options `-af` and `-vf`.

The syntax is `[NUM_INPUT:CHANNEL]FILTERS[LABEL]`.

### Trim

Remove segments from a video/audio.

Bellow an example of removing the segment `00:39:28 - 00:53:10` from a video and audio.

#### Single input

Read the whole video/audio once and trim using the `trim` filter.
`start` and `end` parameters are read in seconds.

The segment to be removed will still be decoded and later discarded,
so may be a little slow.

```shell
ffmpeg \
  -ss 00:00:43.000 -to 01:42:56.000 -i video.mp4 \
  -ss 00:00:43.700 -to 01:42:56.700 -i audio.m4a \
  -filter_complex \
   '[0:v]trim=start=2368:end=3190,setpts=PTS-STARTPTS[0v];
    [1:a]atrim=start=2368:end=3190,asetpts=PTS-STARTPTS[0a];
    [0v][0a]concat=n=1:v=1:a=1[outv][outa]' -map '[outv]' -map '[outa]' \
  result.mp4
```

#### Split input

Read the same video/audio multiple times with different start/end times,
and concat them.

This method may have better performance because there is no decoding of the frames that will be discarded.

```shell
ffmpeg \
  -ss 00:00:43.000 -to 00:39:28.000 -i video.mp4 \
  -ss 00:00:43.700 -to 00:39:28.700 -i audio.m4a \
  -ss 00:53:10.000 -to 01:42:56.000 -i video.mp4 \
  -ss 00:53:10.700 -to 01:42:56.700 -i audio.m4a \
  -filter_complex
   '[0:v][1:a][2:v][3:a]concat=n=2:v=1:a=1[outv][outa]' -map '[outv]' -map '[outa]' \
  result.mp4
```
