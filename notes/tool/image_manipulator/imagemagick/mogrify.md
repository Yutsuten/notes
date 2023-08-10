---
title: Mogrify
man: mogrify
---

## Usage

Convert images in batch.

```shell
mogrify OPTIONS INPUT_FILES
```

| Option | Description |
| --- | --- |
| `-path` | Write images to this path on disk. |
| `-format` | Output image format type. |

Options used in `convert` may also be used in `mogrify`.

## Example

Convert all `webp` images in current directory into `png` images in `out/` directory.

```shell
mogrify -path out -format png *.webp
```
