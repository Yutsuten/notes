---
title: Montage
ref: https://stackoverflow.com/questions/20737061/merge-images-side-by-side-horizontally
---

## Merge images

| Option | Description |
| --- | --- |
| `-tile` | The layout of the images. |
| `-geometry` | Spacing between each image. |

### Example

4 images per line, 2 lines, with no space between them:

```shell
montage *.png -tile 4x2 -geometry +0+0 merged.png
```
