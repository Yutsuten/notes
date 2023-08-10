---
title: Vimiv
ref: https://karlch.github.io/vimiv-qt/
---

## Dark style

Edit `~/.config/vimiv/vimiv.conf`:

```ini
style = default-dark
```

## Default application

To open images using `vimiv` by default, run:

```shell
xdg-mime default vimiv.desktop image/jpeg
xdg-mime default vimiv.desktop image/png
xdg-mime default vimiv.desktop image/gif
xdg-mime default vimiv.desktop image/svg
xdg-mime default vimiv.desktop image/webp
xdg-mime default vimiv.desktop image/tiff
xdg-mime default vimiv.desktop image/heif
xdg-mime default vimiv.desktop image/avif
xdg-mime default vimiv.desktop image/ico
xdg-mime default vimiv.desktop image/bmp
```
