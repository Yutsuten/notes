---
title: Jpg
---

## Examples

### Reduce image size

```shell
convert bigimage.png -strip -resize x180 -quality 85 -interlace plane -sampling-factor 4:2:0 smallimage.jpg
```

### White background into transparent

With start point:

```shell
convert input.jpg -alpha set -channel alpha -fuzz 50% -fill none -floodfill +0+0 white -trim output.png
```

Color match:

```shell
convert input.jpg -alpha set -channel alpha -fuzz 50% -fill none -opaque white -trim output.png
```

### Invert RGB colors

```shell
convert input.jpg -channel RGB -negate output.jpg
```

### Grayscale

```shell
convert input.jpg -colorspace Gray output.jpg
```
