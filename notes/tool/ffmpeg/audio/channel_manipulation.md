---
title: Channel manipulation
ref: https://trac.ffmpeg.org/wiki/AudioChannelManipulation
---

## Mono to stereo

### Create single stereo file

You can use either `-ac 2` or a `-filter_complex`.

::: info
In my tests, if the mono audio was recorded correctly (using `-ac 1`),
you will hear it correctly (both sides) in your media player.
:::

```shell
ffmpeg -i mono.mp3 -ac 2 stereo.m4a
ffmpeg -i mono.mp3 -filter_complex '[0:a][0:a]amerge=inputs=2[outa]' -map '[outa]' stereo.m4a
```

### Merge mono with stereo

```shell
ffmpeg -i mic.flac -i speakers.flac -filter_complex 'amerge=inputs=2' -ac 2 mix.flac
```

If you messed up with recording the mono audio (forgot to use `-ac 1`),
you can try the following:

```shell
ffmpeg -i mic.flac -i speakers.flac \
  -filter_complex \
   '[0:a][0:a]amerge=inputs=2[0a];
    [0a][1:a]amerge=inputs=2[outa]' -map '[outa]' -ac 2 \
  mix.flac
```
