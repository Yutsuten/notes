---
title: Magick
man: magick
ref: https://imagemagick.org/script/magick.php#options
---

## Usage

Manipulate images.

```shell
magick INPUT_OPTIONS INPUT_FILE OUTPUT_OPTIONS OUTPUT_FILE
```

### Optimization

| Option             | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| `-strip`           | Strip image of all profiles and comments.                                   |
| `-trim`            | Trim image edges.                                                           |
| `-interlace`       | Type of image interlacing scheme. `none` `line` `plane` `JPEG` `GIF` `PNG`. |
| `-quality`         | Valid only for JPEG or MPEG. 100 is lossless, 1 is worst quality.           |
| `-sampling-factor` | Used by the JPEG encoder for chroma downsampling.                           |

### Basic operations

| Option          | Description                                          |
| --------------- | ---------------------------------------------------- |
| `-crop WxH+X+Y` | Crop the image to size WxH, starting from (X;Y).     |
| `-resize`       | Resize to WxH. By default it keeps the aspect ratio. |
| `-rotate`       | Rotates the image by X degrees.                      |
| `-flip`         | Mirror the image. ⇅                                  |
| `-flop`         | Mirror the image. ⇄                                  |
| `+repage`       | Reset virtual canvas.                                |

### Color manipulation

| Option        | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| `-negate`     | Replace each pixel with its complementary color.                 |
| `-colorspace` | Set the image colorspace. Ex: `Gray`                             |
| `-threshold`  | Apply simultaneous black/white threshold to the image. Ex: `50%` |

### Border

| Option               | Description                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------- |
| `-bordercolor color` | Set the border color. Color specification is like `-fill`.                                                    |
| `-border geometry`   | Surround the image with a border of color (set by `-bordercolor`).                                            |
| `-gravity`           | Sets the current gravity suggestion for various other settings and options. Check `-list gravity` for values. |
| `-extent`            | Set the image size and offset.                                                                                |

### Advanced operations

| Option           | Description                                                                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `-alpha`         | **set**: Activate alpha channel. **background**: Set any fully-transparent pixel to the background color, while leaving it fully-transparent. |
| `-channel type`  | Change the channel subsequent operators will act.                                                                                             |
| `-fuzz`          | On subsequent operators, colors within this distance are considered equal. Ex: `1%`                                                           |
| `-fill`          | On subsequent operators, color to use when filling a graphic primitive. Ex: `none` `"#ffffff"`                                                |
| `-floodfill`     | Starting from (X;Y), any color that matches the color are filled with the `-fill` color. Ex: `+0+0 white`                                     |
| `-colorize`      | Colorize the image using the color specified by the most recent `-fill` setting.                                                              |
| `-opaque`        | Change this color to the fill color within the image.                                                                                         |
| `-background`    | Set the background color. Ex: `none`                                                                                                          |
| `-flatten`       | Flatten a sequence of images.                                                                                                                 |
| `-blur`          | Reduce image noise and reduce detail levels. Ex: `0x1`                                                                                        |
| `-gaussian-blur` | Reduce image noise and reduce detail levels. Ex: `0.05`                                                                                       |
| `-level`         | Adjust the level (contrast) of image channels. Ex: `10%,90%,2.0`                                                                              |
| `-clone`         | Make a clone of an image (or images).                                                                                                         |
| `-compose`       | Set the type of image composition.                                                                                                            |
| `-composite`     | Perform alpha composition on two images and an optional mask.                                                                                 |

### Values

Format of values used on some options.

| Color     | Description        |
| --------- | ------------------ |
| `#FFFFFF` | White color.       |
| `none`    | Transparent color. |

| Geometry | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| `10`     | Width given, height automatically selected to preserve aspect ratio. |
| `x10`    | Height given, width automatically selected to preserve aspect ratio. |

| Type | Description |
| ---- | ----------- |
| `R`  | Red         |
| `G`  | Green       |
| `B`  | Blue        |
| `A`  | Alpha       |

## Examples

Resize an image to an exact size,
filling with transparent background instead of stretching.

```shell
magick input.png -resize 1920x1080 -alpha background -gravity center -extent 1920x1080 output.png
```

Force output in a specific format by prepending the format in the ouput: `format:output_file`.
Check all available formats with `-list format`.
Bellow command is an example of getting a raw BGRA usable in mpv as overlay.

```shell
magick -list format | less
magick input.webp \( +clone -alpha extract \) -channel RGB -compose multiply -composite BGRA:output
```

Darken an image by 30% (nice for smartphone wallpapers for better contrast with white text).

```shell
magick input.png -fill black -colorize 30% output.png
```
