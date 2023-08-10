---
title: Sxiv
ref: https://man.archlinux.org/man/sxiv.1.en
---

## Usage

a simple image viewer for X.

```shell
sxiv OPTIONS TARGET
```

| Option | Description |
| --- | --- |
| `-a` | Play animations of multi-frame images. |
| `-b` | Do not show info bar on bottom of window. |
| `-f` | Start in fullscreen mode. |
| `-i` | Read names of files to open from standard input. Also done if FILE is `-`. |
| `-p` | Enable private mode, in which sxiv does not write any cache or temporary files. |
| `-q` | Be quiet, disable warnings to standard error stream. |
| `-r` | Search the given directories recursively for images to view. |
| `-t` | Start in thumbnail mode. |
| `-Z` | The same as `-z 100`. |
| `-z` | Set zoom level to ZOOM percent. |

### Keyboard commands

| Shortcut | Description |
| --- | --- |
| `q` | Quit sxiv. |
| `return` | Switch to thumbnail mode / open selected image in image mode. |
| `f` | Toggle fullscreen mode. |
| `b`| Toggle visibility of info bar on bottom of window. |
| `g` | Go to the first image. |
| `G` | Go to the last image. |
| `r` | Reload image. |
| `Ctrl-space` | Play/stop animations of multi-frame images. |
| `arrow` | Scroll image. |
| `+` | Zoom in. |
| `-` | Zoom out. |
| `n` `space` | Next image. |
| `p` `backspace` | Previous image. |
| `=` | Set zoom level to 100%. |
| `W` | Fit image to window. |

## Configuration

Set background and foreground colors on `~/.Xresources`:

```txt
*background: #383c4a
*foreground: #cdd1dc
```

Apply changes with `xrdb ~/.Xresources`.

## Examples

Open directory using the thumbnail mode.

```shell
sxiv -t directory/
```

Randomize images.

```shell
printf '%s\0' * | shuf -z | xargs -r0 sxiv
```
