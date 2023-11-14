---
title: Basic
ref: https://ffmpeg.org/ffmpeg.html
---

## Overview

Video and audio converter.

To get information of a file,
use `ffprobe input.mp4`.

## Usage

```shell
ffmpeg GLOBAL_OPTIONS INPUT_OPTIONS -i input_url OUTPUT_OPTIONS output_url
```

| Option | Description |
| --- | --- |
| `-loglevel` | (Global Option) Default is `info`. Options: `quiet`, `fatal`, `error`, `warning`, `info`, `verbose`, `debug`, `trace`. |
| `-nostdin` | (Global Option) Disable interaction on standard input. Useful for running in the background. |
| `-codecs` | List all available codecs |
| `-formats` | Show available formats (including devices). |
| `-encoders` | Show all available encoders. |
| `-pix_fmts` | Show available pixel formats. |
| `-codec` | Encoder to be used (add `:<stream>` to specify a stream). Use `copy` to not re-encode. |
| `-vcodec` | Video encoder (alias for `-codec:v`). |
| `-acodec` | Audio encoder (alias for `-codec:a`). |
| `-shortest` | Finish encoding when the shortest output stream ends. |
| `-frames` | Stop writing to the stream after N frames. |
| `-pix_fmt` | Set pixel format. |
| `-map_metadata` | Set metadata information. |
| `-vf` | Create a filtergraph and use it to filter the video stream (alias for `-filter:v`). |
| `-an` | Disables all audio streams. |
| `-af` | Create a filtergraph and use it to filter the audio stream (alias for `-filter:a`). |
| `-ac` | Set the number of audio channels (usually 1 for mic and 2 otherwise). |
| `-ar` | Set the audio sampling frequency. |
| `-f` | Force input/output format. |
| `-b` | Bitrate, in the format `2000k`. |
| `-r` | Frame rate (FPS). Usually 30 or 60. |
| `-ss` | Start time. Format is `hh:mm:ss.000`. |
| `-to` | End time. Format is `hh:mm:ss.000`. |
| `-t` | Duration. Format is `hh:mm:ss.000`. |
| `-y` | Overwrite output files without asking. |

### List encoders

| Command | Output |
| --- | --- |
| `ffmpeg -encoders 2>&1 | grep "^ A"` | Audio encoders |
| `ffmpeg -encoders 2>&1 | grep "^ V"` | Video encoders |

## Tips

If using `-shortest` is not working as expected,
you may need to manually set the desired time with `-t`.

```shell
ffmpeg \
  -i video_already_cut.mkv \
  -ss 01:53:55.300 -t 45.3 -i rec.flac \
  -ss 01:53:55.300 -t 45.3 -i mix.flac \
  # ...
```
