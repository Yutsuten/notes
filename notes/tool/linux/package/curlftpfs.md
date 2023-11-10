---
title: CurlFtpFS
arch: curlftpfs
---

## About

This package is not actively maintaned,
and it is buggy (directories with spaces are not correctly handled).

Prefer using `wget` or `lftp`.

## Usage

Mount remote using `$myuser` as user using port 2221.

```shell
curlftpfs -o user=$myuser host:2221 /media/ftp
fusermount -u /media/ftp
```
