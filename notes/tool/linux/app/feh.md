---
title: Feh
ref: https://wiki.archlinux.org/index.php/feh
---

A lightweight and powerful image viewer that can also be used to manage the desktop wallpaper.

## Usage

```shell
feh OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `-.` `--scale-down` | Automatically scale down images to fit screen size. |
| `-F` `--fullscreen` | Make the window full screen. |
| `-d` `--draw-filename` | Draw the file name at the top-left of the image. |
| `-r` `--recursive` | Recursively expand FILE. |
| `-z` `--randomize` | Randomize the filelist. |
| `--zoom` | Zooms images by a PERCENT, `max` or `fill`. |
| `--bg-fill` | Set file as desktop background, zooms until it fits the screen. |

While `feh` is open,
you can interact with it using some shortcuts.

| Shortcut | Description |
| --- | --- |
| `f` | Toggle fullscreen. |
| `Z` | Toggle auto-zoom. |
| `d` | Toggle filename display. |
| `R` | Antialias the image (useful after scrolling). |
| `z` | Jump to a random file in the current file list. |
| `o` | Toggle pointer visibility. |
| `Up` | Zoom in. |
| `Down` | Zoom out. |
| `Ctrl+Arrow` | Scroll. |
| `x` `q` `Esc` | Close window (quit). |
