---
title: Webp
ref: https://imagemagick.org/script/webp.php
---

## Examples

### Lossless compression

```shell
magick input.png -quality 50 -define webp:lossless=true -define webp:method=6 output.webp
```

### Lossy compression

Quality can be adjusted with `-quality`.

```shell
magick input.png -define webp:method=6 output.webp
```
