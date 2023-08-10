---
title: Raw
ref: https://trac.ffmpeg.org/wiki/audio%20types
---

## Sample formats

Get a list of supported sample formats with:

```shell
ffmpeg -formats | grep PCM
```

## Raw encode

Specify the sample format `-f` and the respective codec.

```shell
ffmpeg -f pulse -i recording.monitor -ac 2 -f s16le -acodec pcm_s16le audio.raw
```

## Raw decode

As the data is raw, you need to specify the audio information manually.

- Choose the same sample format `-f` as recorded
- Set the audio frequency `-ar` in Hz as shown when recording
- Set the number of channels `-ac` as recorded

```shell
ffmpeg -f s16le -ar 48000 -ac 2 -i audio.raw raw_to_opus.opus
```
