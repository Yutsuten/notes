---
title: Yt-dlp
ref: https://github.com/yt-dlp/yt-dlp
---

## Download only audio

Download the best audio quality,
prefer free format if available and extract audio only (or else it will be a black video).

```shell
yt-dlp --prefer-free-formats -f 'best*[vcodec=none]' --extract-audio URL
```

## Certificate error

If for any reason the certificate is not valid,
one can disable its check with:

```shell
yt-dlp --no-check-certificates URL
```
