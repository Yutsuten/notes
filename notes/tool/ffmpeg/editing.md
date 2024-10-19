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
| `-loglevel` | (Global Option) Default is `info`. Options: `quiet` `fatal` `error` `warning` `info` `verbose` `debug` `trace`. |
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

`-filter_complex` cannot be used with the simple filter options `-af` `-vf`.
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

### Video Trim

Remove segments from a video/audio.

Bellow an example of removing the segment `00:39:28 - 00:53:10` from a video and audio.

#### Single input

Read the whole video/audio once and trim using the [trim filter](https://ffmpeg.org/ffmpeg-filters.html#trim).
`start` `end` parameters are read in seconds (operators `+ - * /` can be used) or time,
relative to the start time of the input.

The segment to be removed will still be decoded and later discarded,
so may be a little slow.

```shell
ffmpeg -i video.mp4 -i audio.m4a \
  -filter_complex \
   "[0:v]
     trim=start='00\:43.00':end='39\:28.00',
     trim=start='53\:10.00':end='1\:42\:56.00',
     setpts=PTS-STARTPTS[0v];
    [1:a]
     atrim=start='00\:43.70':end='39\:28.70',
     atrim=start='53\:10.70':end='1\:42\:56.70',
     asetpts=PTS-STARTPTS[0a];
    [0v][0a]concat=n=1:v=1:a=1[outv][outa]" -map '[outv]' -map '[outa]' \
  result.mp4
```

#### Split input

Read the same video/audio multiple times with different start/end times,
and concat them.

This method may have better performance because there is no decoding of the frames that will be discarded.

```shell
ffmpeg \
  -ss 0:00:43.00 -to 0:39:28.00 -i video.mp4 \
  -ss 0:00:43.70 -to 0:39:28.70 -i audio.m4a \
  -ss 0:53:10.00 -to 1:42:56.00 -i video.mp4 \
  -ss 0:53:10.70 -to 1:42:56.70 -i audio.m4a \
  -filter_complex
   '[0:v][1:a][2:v][3:a]concat=n=2:v=1:a=1[outv][outa]' -map '[outv]' -map '[outa]' \
  result.mp4
```

### Video Scale

Resize the video using the [scale filter](https://ffmpeg.org/ffmpeg-filters.html#scale-1)
to the specified `width:height`.
If `-1` is used, keep aspect ratio.

```shell
ffmpeg -i video.mp4 -vf 'scale=960:-1:flags=lanczos' rescaled.mp4
```

:::tip
It is recommended to rescale using the default scaler `bicubic` or `lanczos`.
:::

### Video Crop

Crop a portion of a video using the [crop filter](https://ffmpeg.org/ffmpeg-filters.html#crop).
Syntax: `crop=W:H:X:Y`

- `W`: Width of the output
- `H`: Height of the output
- `X`: Horizontal position from where to begin cropping
- `Y`: Vertical position from where to begin cropping

```shell
ffmpeg -i video.mp4 -vf 'crop=600:400:660:340' cropped.mp4
```

### Video Fade

Use the [fade filter](https://ffmpeg.org/ffmpeg-filters.html#fade) to fade the video in or out.

| Parameter | Description            |
| --------- | ---------------------- |
| `st`      | Start time, in seconds |
| `d`       | Duration, in seconds   |

Considering an 90 seconds long video file,
fade in the first 1 second and fade out the last 1 second.

```shell
ffmpeg -i video.mp4 -vf 'fade=in:0:d=1,fade=out:st=89:d=1' out.mp4
```

### Draw text

Use the [drawtext filter](https://ffmpeg.org/ffmpeg-filters.html#drawtext-1)
to put some text into the video.
Parameters:

| Parameter     | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `text`        | The text string to be drawn.                                                 |
| `fontsize`    | The font size to be used for drawing text (default 16).                      |
| `fontcolor`   | The color to be used for drawing fonts (default `black`).                    |
| `borderw`     | Set the width of the border to be drawn around the text using `bordercolor`. |
| `bordercolor` | Set the color to be used for drawing border around text (default `black`).   |
| `x`           | X offset where text will be drawn within the video frame.                    |
| `y`           | Y offset where text will be drawn within the video frame.                    |
| `enable`      | (Generic option) If the evaluation is non-zero, the filter will be enabled.  |

For offsets, use these variables to position the text:

- `w` for video width
- `h` for video height
- `tw` for text width
- `th` for text height

Some common positioning:

|            | Left             | Center                  | Right               |
| ---------- | ---------------- | ----------------------- | ------------------- |
| **Top**    | `x=0:y=0`        | `x=(w-tw)/2:y=0`        | `x=w-tw:y=0`        |
| **Center** | `x=0:y=(h-th)/2` | `x=(w-tw)/2:y=(h-th)/2` | `x=w-tw:y=(h-th)/2` |
| **Bottom** | `x=0:y=h-th`     | `x=(w-tw)/2:y=h-th`     | `x=w-tw:y=h-th`     |

For `enable`, here are some common [expression evaluations](https://ffmpeg.org/ffmpeg-utils.html#Expression-Evaluation)
(value in seconds, relative to the start time of the input):

- `between(t, 2, 4)` for showing the text between two times;
- `lte(t, 2)` for showing the text in the beginning;
- `gte(t, 3*60+2)` for showing the text in the end.

For example, if skipping some part of the content and telling it to the viewer:

```shell
ffmpeg \
-ss 02:12.60 -to 02:33.85 -i video.mp4 \
-ss 02:12.60 -to 02:33.85 -i rec.flac \
-ss 33:52.10 -to 36:46.30 -i video.mp4 \
-ss 33:52.10 -to 36:46.30 -i rec.flac \
-vcodec libsvtav1 -r 60 -crf 46 -preset 0 -g 600 -pix_fmt yuv420p \
-acodec libopus \
-filter_complex \
 "[2:v]drawtext=text='Skipping 30 minutes...':fontsize=45:fontcolor=white:borderw=2:x=(w-text_w)/2:y=(h-text_h)/2:enable='lte(t, 1.5)'[2v];
  [0:v][1:a][2v][3:a]concat=n=2:v=1:a=1[outv][outa]" -map '[outv]' -map '[outa]' \
out.mkv
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

### Audio Fade

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
