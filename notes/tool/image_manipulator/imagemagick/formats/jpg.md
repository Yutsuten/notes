---
title: Jpg
---

## Examples

### Reduce image size

```shell
magick bigimage.png -strip -resize x180 -quality 85 -interlace plane -sampling-factor 4:2:0 smallimage.jpg
```

### Colored background into white

Good for creating photos used in documents.

```shell
magick input.jpg -channel RGB -fuzz 13% -fill white -floodfill +0+0 '#c2b0a2' output.png
```

### White background into transparent

With start point:

```shell
magick input.jpg -alpha set -channel alpha -fuzz 50% -fill none -floodfill +0+0 white -trim output.png
```

Color match:

```shell
magick input.jpg -alpha set -channel alpha -fuzz 50% -fill none -opaque white -trim output.png
```

### Invert RGB colors

```shell
magick input.jpg -channel RGB -negate output.jpg
```

### Grayscale

```shell
magick input.jpg -colorspace Gray output.jpg
```
