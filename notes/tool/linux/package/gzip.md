---
title: Gzip
---

## Usage

Used to compress files.
To compress directories, use `tar`.

```shell
gzip OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `-d` | Decompress. |
| `-k` | Keep input files during compression or decompression. |

### Examples

For compressing:

```shell
gzip file  # > file.gz
```

For decompressing:

```shell
gzip -d file.gz  # > file
gunzip file.gz   # > file
```
