---
title: Montage
ref: https://imagemagick.org/script/montage.php
---

## Merge images

| Option        | Description                   |
| ------------- | ----------------------------- |
| `-tile`       | The layout of the images.     |
| `-geometry`   | Spacing between each image.   |
| `-background` | Color used if spacing images. |

### Example

Arrange images in 4 columns and 2 lines, with no space in between:

```shell
montage *.png -tile 4x2 -geometry +0+0 merged.png
```

Two images side by side, with 4px black line separator and 4px surrounding border:

```shell
montage input1.png input2.png -background black -tile 2x1 -geometry +2+2 png:- \
| magick - -bordercolor black -border 2 merged.png
```
