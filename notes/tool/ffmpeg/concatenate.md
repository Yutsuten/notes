---
title: Concatenate
ref: https://trac.ffmpeg.org/wiki/Concatenate
---

## Without re-encode

This only works if the files use the same codecs.

Create a file `mylist.txt` and write the name of the files you want to have concatenated in the
following form:

```txt
file 'file1.mp4'
file 'file2.mp4'
```

Then run:

```shell
ffmpeg -f concat -i mylist.txt -codec copy output.mp4
ffmpeg -f concat -i mylist.txt -codec copy -map '0:v' -map '0:a:0' -map '0:a:1' output.mp4
```

## With re-encode

This works even if the files use different codecs.

```shell
ffmpeg \
  -i input1.mp4 \
  -i input2.webm \
  -i input3.mov \
  -filter_complex \
   '[0:v][0:a][1:v][1:a][2:v][2:a]concat=n=3:v=1:a=1[outv][outa]' -map '[outv]' -map '[outa]' \
  output.mkv
```

## Add audio to video

To combine a video only `video.mp4` with an audio only `audio.m4a`,
run this command while adjusting the start time:

```shell
ffmpeg \
  -ss 00:02:32.000 -t 50 -i video.mp4 \
  -ss 00:02:33.200 -t 50 -i audio.m4a \
  -codec copy \
  sync_test.mp4
```
