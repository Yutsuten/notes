---
title: Channel manipulation
ref: https://trac.ffmpeg.org/wiki/AudioChannelManipulation
---

## Mono to stereo

### Create single stereo file

```shell
ffmpeg -i mono.mp3 -ac 2 stereo.m4a
```

or

```shell
ffmpeg -i mono.mp3 -filter_complex '[0:a][0:a]amerge=inputs=2[outa]' -map '[outa]' stereo.m4a
```

### Merge mono with stereo

Example of creating stereo audio from mono audio (mic),
and merging it with a stereo audio (speakers).

```shell
ffmpeg -i mic.flac -i speakers.flac \
  -filter_complex \
   '[0:a][0:a]amerge=inputs=2[0a];
    [0a][1:a]amerge=inputs=2[outa]' -map '[outa]' -ac 2 \
  mix.flac
```
