---
title: Pngquant
---

## Usage

Optimize file size of PNG images.

```shell
pngquant OPTIONS NCOLORS - < INPUT_FILE > OUTPUT_FILE
```

| Option | Description |
| --- | --- |
| `-s` `--speed` | From 1 (slowest) to 11 (fastest), affects quality and compression level. |
| `-Q` `--quality` | Select the range of quality desired. Ex: `50-70` |

## Examples

From file:

```shell
pngquant -s 1 -Q 50-70 - < input.png > output.png
```

From imagemagick output:

```shell
convert input.png ... png:- | pngquant -s 1 - > output.png
```
