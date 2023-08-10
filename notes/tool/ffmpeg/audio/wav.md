---
title: Wav
ref: https://trac.ffmpeg.org/wiki/audio%20types
---

## Overview

Lossless audio format.

## wav

Maximum file size of 4GiB.

```shell
ffmpeg -f pulse -i recording.monitor -ac 2 audio.wav
```

## w64

Same as `wav`, but without the 4GiB file size limitation.

```shell
ffmpeg -f pulse -i recording.monitor -ac 2 audio.w64
```
