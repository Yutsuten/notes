---
title: Opus
ref: https://trac.ffmpeg.org/wiki/Encode/HighQualityAudio
---


## Codecs

Quality from high to low:

`libopus > libvorbis >= libfdk_aac > libmp3lame >= eac3/ac3 > aac > libtwolame > vorbis > mp2 > wmav2/wmav1`

### libopus

If output extension is `.opus`, codec `libopus` is automatically selected.

```shell
ffmpeg -i input.wav output.opus
```
