---
title: Exiv2
ref: https://github.com/Exiv2/exiv2/blob/main/exiv2.md
---

## Usage

```shell
exiv2 [OPTION [ARG]]+ [ACTION] FILE ...
```

| Option | Description |
| --- | --- |
| `-M` `--Modify cmd` | Modify the metadata with the command. |

### Examples

Check the metadata, rename file using timestamp metadata.

```fish
exiv2 myphoto.jpg
set newfile ( \
  exiv2 myphoto.jpg \
  | sed -nE 's/Image timestamp : ([0-9]{4}):([0-9]{2}):([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/\1-\2-\3-\4-\5-\6/p' \
  ).jpg
mv myphoto.jpg out/"$newfile"
```

Add timestamp metadata.

```fish
exiv2 -M "set Exif.Photo.DateTimeOriginal 2022:10:01 11:25:24" myphoto.webp
exiv2 \
  -M "set Exif.Photo.DateTimeOriginal $d" -M "set Exif.Photo.OffsetTimeOriginal $t" \
  -M "set Exif.Photo.DateTimeDigitized $d" -M "set Exif.Photo.OffsetTimeDigitized $t" \
  myphoto.jpg
```

Add timestamp metadata from filename.

```fish
set file 2023-08-30-21-39-30_photo.webp
set timestamp (echo "$file" | sed -nE 's/^([0-9]{4})-([0-9]{2})-([0-9]{2})-([0-9]{2})-([0-9]{2})-([0-9]{2})_.*/\1:\2:\3 \4:\5:\6/p')
exiv2 -M "set Exif.Photo.DateTimeOriginal $timestamp" $file
```
