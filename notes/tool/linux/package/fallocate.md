---
title: Fallocate
man: fallocate
---

## Usage

Preallocate or deallocate space to a file.
Only available on filesystems that support the **fallocate** system call.

```shell
fallocate OPTIONS FILENAME
```

| Option          | Description       |
| --------------- | ----------------- |
| `-l` `--length` | Size of the file. |

Create a 2GB file:

```shell
fallocate -l 2G partition.img
```
