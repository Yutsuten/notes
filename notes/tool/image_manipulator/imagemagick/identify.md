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

| Option | Description |
| --- | --- |
| `-format` | Output formatted image characteristics. |

### Format

| Sign | Description |
| --- | --- |
| `%P` | Page (canvas) size ( = `%Wx%H` ) |
| `%G` | Original image size ( = `%wx%h` ). |
| `%w` | Current width in pixels. |
| `%W` | Page (canvas) width. |
| `%h` | Current image height in pixels. |
| `%H` | Page (canvas) height. |
| `%e` | Filename extension or suffix. |
| `%t` | Filename without directory or extension (suffix). |
| `%m` | Image file format (file magic). |
