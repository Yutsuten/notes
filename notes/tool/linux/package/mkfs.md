---
title: Mkfs
---

## Partition format

Here I describe how to format various filesystems in Linux.

For UEFI partition, use FAT.

```shell
mkfs.fat -F32 /dev/sda1
mkfs.ext4 /dev/sda2
mkswap /dev/sda3
mkfs.ntfs -Q -L Label /dev/sda4
```
