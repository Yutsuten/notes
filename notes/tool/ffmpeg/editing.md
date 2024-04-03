---
title: Editing
ref: https://ffmpeg.org/ffmpeg.html
---

## Overview

Video and audio converter.
To get information of a file,
use `ffprobe input.mp4`.

More references:

- [Audio Channel Manipulation](https://trac.ffmpeg.org/wiki/AudioChannelManipulation)
- [Audio Volume](https://trac.ffmpeg.org/wiki/AudioVolume)
- [Filters](https://ffmpeg.org/ffmpeg-filters.html)
- [Formats](https://ffmpeg.org/ffmpeg-formats.html)

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
| `-vf` `-filter:v` | Create a filtergraph and use it to filter the video stream. |
| `-an` | Disables all audio streams. |
| `-af` `-filter:a` | Create a filtergraph and use it to filter the audio stream. |
| `-ac` | Set the number of audio channels (usually 1 for mic and 2 otherwise). |
| `-ar` | Set the audio sampling frequency. |
| `-f` | Force input/output format. |
| `-b` | Bitrate, in the format `2000k`. |
| `-r` | Frame rate (FPS). Usually 30 or 60. |
| `-ss` | Start time. Format is `hh:mm:ss.000`. |
| `-to` | End time. Format is `hh:mm:ss.000`. |
| `-t` | Duration. Format is `hh:mm:ss.000`. |
| `-y` | Overwrite output files without asking. |

`-filter_complex` cannot be used with the simple filter options `-af` and `-vf`.
The syntax is `[NUM_INPUT:CHANNEL]FILTERS[LABEL]`.

List available encoders with:

| Command | Output |
| --- | --- |
| `ffmpeg -encoders 2>&1 \| grep "^ A"` | Audio encoders |
| `ffmpeg -encoders 2>&1 \| grep "^ V"` | Video encoders |

## Video manipulation

### Lossless copy

Copy part of the video with `-codec copy -avoid_negative_ts make_zero`.
It will adapt the `-ss` to the previous I-Frame.

```shell
ffmpeg -ss 02:19 -to 08:18 -i full.mp4 -codec copy -avoid_negative_ts make_zero cropped.mp4
```

### Trim

Remove segments from a video/audio.

Bellow an example of removing the segment `00:39:28 - 00:53:10` from a video and audio.

#### Single input

Read the whole video/audio once and trim using the `trim` filter.
`start` and `end` parameters are read in seconds.

The segment to be removed will still be decoded and later discarded,
so may be a little slow.

```shell
ffmpeg \
  -ss 00:00:43.000 -to 01:42:56.000 -i video.mp4 \
  -ss 00:00:43.700 -to 01:42:56.700 -i audio.m4a \
  -filter_complex \
   '[0:v]trim=start=2368:end=3190,setpts=PTS-STARTPTS[0v];
    [1:a]atrim=start=2368:end=3190,asetpts=PTS-STARTPTS[0a];
    [0v][0a]concat=n=1:v=1:a=1[outv][outa]' -map '[outv]' -map '[outa]' \
  result.mp4
```

#### Split input

Read the same video/audio multiple times with different start/end times,
and concat them.

This method may have better performance because there is no decoding of the frames that will be discarded.

```shell
ffmpeg \
  -ss 00:00:43.000 -to 00:39:28.000 -i video.mp4 \
  -ss 00:00:43.700 -to 00:39:28.700 -i audio.m4a \
  -ss 00:53:10.000 -to 01:42:56.000 -i video.mp4 \
  -ss 00:53:10.700 -to 01:42:56.700 -i audio.m4a \
  -filter_complex
   '[0:v][1:a][2:v][3:a]concat=n=2:v=1:a=1[outv][outa]' -map '[outv]' -map '[outa]' \
  result.mp4
```

### Scale

Resize the video to the specified `width` and `height`.
If `-1` is used, keep aspect ratio.

```shell
ffmpeg -i video.mp4 -vf 'scale=960:-1:flags=lanczos' rescaled.mp4
```

:::tip
It is recommended to rescale using the default scaler `bicubic` or `lanczos`.
:::

### Crop

Crop a portion of a video.
Syntax: `crop=W:H:X:Y`

- `W`: Width of the output
- `H`: Height of the output
- `X`: Horizontal position from where to begin cropping
- `Y`: Vertical position from where to begin cropping

```shell
ffmpeg -i video.mp4 -vf 'crop=600:400:660:340' cropped.mp4
```

### Fade

Use the `fade` video filter to fade the video in or out.
Parameters:

- `st` is the start time, in seconds
- `d` is the duration, in seconds

Considering an 90 seconds long video file,
fade in the first 1 second and fade out the last 1 second.

```shell
ffmpeg -i video.mp4 -vf 'fade=in:0:d=1,fade=out:st=89:d=1' out.mp4
```

### Shortest

Set `-t` or `-to` only for one channel,
and all channels will be cut at that timing too.

```shell
ffmpeg \
  -ss 05:00 -t 32 -i video.mkv \
  -ss 05:00 -i rec.flac \
  -ss 05:00 -i mix.flac -shortest \
  # ...
```

It does not always work.
You may need to manually set the desired time with `-t` or `-to` for all channels.

## Audio manipulation

### Volume

Use the `volume` audio filter to increase or reduce the volume of the audio.
Allowed values are:

- A float value: `1.5` (50% increase)
- A dB value: `15dB`

```shell
ffmpeg -i low_volume.m4a -af 'volume=15dB' adjusted.m4a
```

### Fade

Use the `afade` audio filter to fade the audio in or out.
Parameters:

- `st` is the start time, in seconds
- `d` is the duration, in seconds

Considering an 90 seconds long audio file,
fade in the first 1 second and fade out the last 1 second.

```shell
ffmpeg -i audio.m4a -af 'afade=in:0:d=1,afade=out:st=89:d=1' out.m4a
```

### Mono to stereo

#### Create single stereo file

You can use either `-ac 2` or a `-filter_complex`.

::: info
In my tests, if the mono audio was recorded correctly (using `-ac 1`),
you will hear it correctly (both sides) in your media player.
:::

```shell
ffmpeg -i mono.mp3 -ac 2 stereo.m4a
ffmpeg -i mono.mp3 -filter_complex '[0:a][0:a]amerge=inputs=2[outa]' -map '[outa]' stereo.m4a
```

#### Merge mono with stereo

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
