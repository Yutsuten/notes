---
title: Aac
ref: https://trac.ffmpeg.org/wiki/Encode/AAC
---

## Codecs

Quality from high to low:

`libopus > libvorbis >= libfdk_aac > libmp3lame >= eac3/ac3 > aac > libtwolame > vorbis > mp2 > wmav2/wmav1`

### aac

Native FFmpeg AAC Encoder.

| Option | Description |
| --- | --- |
| `-b:a` | Bitrate, to adjust quality. (`<110k` bad, `110k~170k` good, `>170k` transparent) |

```shell
ffmpeg -i input.wav -acodec aac -b:a 160k output.m4a
```
