---
title: Mp3
ref: https://trac.ffmpeg.org/wiki/Encode/MP3
---

## Codecs

Quality from high to low:

`libopus > libvorbis >= libfdk_aac > libmp3lame >= eac3/ac3 > aac > libtwolame > vorbis > mp2 > wmav2/wmav1`

### libmp3lame

LAME MP3 encoder wrapper.

| Option | Description |
| --- | --- |
| `-qscale:a` | Audio quality. Range is 0-9 (default 4, higher is worst). |

```shell
ffmpeg -i input.wav -acodec libmp3lame -qscale:a 3 output.mp3
```

### Generate empty audio

To be able to use `anullsrc` as input we need to force
`lavfi` (libavfilter virtual input device) format,
or else `ffmpeg` assumes `anullsrc` is a filename.

The duration is set with `-t` in seconds.

```shell
ffmpeg -f lavfi -i 'anullsrc=channel_layout=mono:sample_rate=24000' -codec:a libmp3lame -t 0.3 silence300ms.mp3
```
