---
title: Go mtpfs
ref: https://wiki.archlinux.org/index.php/Media_Transfer_Protocol
---

## Install

[Download](https://hanwen.home.xs4all.nl/public/software/go-mtpfs/) the binary.

```shell
curl -Lo ~/.local/bin/go-mtpfs 'https://hanwen.home.xs4all.nl/public/software/go-mtpfs/go-mtpfs.x86_64'
```

adjust the permissions and move to your bin folder:

```shell
chmod u+x ~/.local/bin/go-mtpfs
```

## Usage

Mount the MTP device:

```shell
go-mtpfs ~/Mount
```

Unmount the MTP device:

```shell
fusermount -u ~/Mount
```
