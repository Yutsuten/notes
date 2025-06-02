---
title: Zip
ref: https://man.archlinux.org/man/zip.1
---

## Usage

Package and compress (archive) files.

```shell
zip OPTIONS filename.zip SOURCE
```

| Option                 | Description                       |
| ---------------------- | --------------------------------- |
| `-r` `--recurse-paths` | Recursively compress a directory. |

To include all files in the current directory,
both `.` and `*` seems to have the same result.

```shell
zip -r filename.zip . # Current directory
zip -r filename.zip * # Shell expands all files
```

There is no option to set the current directory,
so `cd` is necessary in such cases.

```shell
cd path/to/target
zip -r filename.zip .
```
