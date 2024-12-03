---
title: Png
---

## Examples

### Transparent background into color

```shell
magick input.png -background '#D9D5C1' -flatten output.png
```

### Invert RGB colors

Keep transparent pixels as is.

```shell
magick input.png -channel RGB -negate output.png
```

### Blurred border

Add a border that surrounds a transparent image.
`-blur` is used as the size of the border,
and `-level` is used as a blur (to create shiny or shadow effect).

```shell
magick star.png -bordercolor none -border 10 -background '#FFF' -alpha background -channel A -blur 0x5 -level 0,40% -trim +repage shiny_star.png
```

### Rounded square

Add a rounded square as background to a transparent image.

```shell
magick -size 32x32 xc:none -draw 'roundrectangle 0,0,30,30,8,8' mask.png
magick original.png -resize 26x26 -bordercolor white -border 3 -background white -flatten with-white-bg.png
magick with-white-bg.png -matte mask.png -compose DstIn -composite final.png
```
