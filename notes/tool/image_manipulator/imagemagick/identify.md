---
title: Identify
man: identify
ref: https://imagemagick.org/script/identify.php
---

## Usage

Get image information.

```shell
identify OPTIONS image.png
```

| Option       | Description                                                              |
| ------------ | ------------------------------------------------------------------------ |
| `-format`    | Output formatted image characteristics.                                  |
| `-precision` | Number of digits to represent the image size. Use `16` to show in bytes. |

### Format

All available format options [here](https://imagemagick.org/script/escape.php).

| Sign | Description                                       |
| ---- | ------------------------------------------------- |
| `%P` | Page (canvas) size ( = `%Wx%H` )                  |
| `%G` | Original image size ( = `%wx%h` ).                |
| `%w` | Current width in pixels.                          |
| `%W` | Page (canvas) width.                              |
| `%h` | Current image height in pixels.                   |
| `%H` | Page (canvas) height.                             |
| `%b` | File size of image                                |
| `%e` | Filename extension or suffix.                     |
| `%t` | Filename without directory or extension (suffix). |
| `%m` | Image file format (file magic).                   |

## Examples

Print image width x height and file size in bytes:

```shell
identify -precision 16 -format '%P %b' ~/Projects/atelier-lua/thumbnails/0039-anime.avif
```
