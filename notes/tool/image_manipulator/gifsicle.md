---
title: Gifsicle
man: gifsicle
---

## Usage

Manipulates GIF images and animations.

```shell
gifsicle OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `-I` `--info` | Print a human-readable description of each input GIF to the standard output. |
| `-k` `--colors` | Reduce the number of distinct colors. |
| `-o` `--output` | Send output to file. The special filename `-` means the standard output. |
| `--crop` | Crop the following input frames to a smaller rectangular area. Ex: `x1,y1-x2,y2` `x1,y1+widthxheight` |
| `--resize` | Resize the output GIF to the given width and height. |
| `--resize-width` | Resize to a given width, preserving aspect ratio. |
| `--resize-height` | Resize to a given height, preserving aspect ratio. |
| `--resize-fit` | Resize the output GIF to fit within a rectangle, preserving aspect ratio. |
| `--scale` | Scale the output GIF's width and height by the given factor. |
| `--resize-colors` | Allow Gifsicle to add intermediate colors when resizing images. |
| `--lossy` | Alter image colors to shrink output file size at the cost of artifacts and noise. |

## Examples

Crop, resize and use lossy compression:

```shell
gifsicle --crop 140,30-360,280 --colors 256 --resize-height 180 --lossy=45 --output out.gif in.gif
```
