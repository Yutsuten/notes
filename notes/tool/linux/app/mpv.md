---
title: Mpv
man: mpv
ref: https://wiki.archlinux.org/title/Mpv
---

## Usage

If using with URLs, have `yt-dlp` installed.

If the url used causes "invalid certificate" for some reason, use:

```shell
mpv --ytdl-raw-options=no-check-certificates= URL
```

To use an external audio file while playing
(use `Ctrl +` `Ctrl -` to adjust audio delay):

```shell
mpv --audio-file=audio.flac video.mkv
```

## Shortcuts

For some shortcuts,
extra configuration must be added to `~/.config/mpv/input.conf`.

| Shortcut | Description                 | Extra configuration                   |
| -------- | --------------------------- | ------------------------------------- |
| `>`      | Next file in a playlist     | -                                     |
| `<`      | Previous file in a playlist | -                                     |
| `9`      | Reduce volume               | -                                     |
| `0`      | Increase volume             | -                                     |
| `s`      | Shuffle                     | `s cycle shuffle`                     |
| `l`      | Loop playlist               | `l cycle-values loop-playlist yes no` |
| `#`      | Next audio track            | -                                     |
| `Ctrl +` | Increase audio delay        | -                                     |
| `Ctrl -` | Decrease audio delay        | -                                     |

## Settings

Copy the default configuration files.

```shell
cp -r /usr/share/doc/mpv ~/.config
```

### Tips

Load high quality OpenGL options ([available profiles](https://github.com/mpv-player/mpv/blob/master/etc/builtin.conf)):

```ini
profile=high-quality
```

Display timestamps with milliseconds in the OSC:

```ini
script-opts=osc-timems=yes
```

## Custom OSC

- [uosc](https://github.com/tomasklaen/uosc)
- [modern](https://github.com/maoiscat/mpv-osc-modern)
- [tethys](https://github.com/Zren/mpv-osc-tethys)

## Subtitles

- [Reference](https://cweiske.de/tagebuch/embedded-lyrics.htm#lyrics)

Supported formats:
[LRC](https://en.wikipedia.org/wiki/LRC_(file_format)), SRT, VTT, ASS

### LRC

Formatting is very important (cannot use 3 digits for milisseconds).

```txt
[mm:ss.xx] Text to be shown
```
