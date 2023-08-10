---
title: Mtpfs
ref: https://wiki.archlinux.org/index.php/Media_Transfer_Protocol
---

## Configuration

Uncomment the following line from `/etc/fuse.conf`:

```txt
user_allow_other
```

## Usage

Mount the MTP device:

```shell
mtpfs -o allow_other ~/Mount
```

Unmount the MTP device:

```shell
fusermount -u ~/Mount
```
