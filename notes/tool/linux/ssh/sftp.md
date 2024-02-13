---
title: Sftp
man: sftp
---

## Introduction

Used to transfer files,
if sync (mirroring) is desired,
consider using `lftp` instead.

Sftp can copy and manipulate files between hosts in an interactive way.

## Usage

```shell
sftp -P 22 user@host:path
sftp sftp://user@host:port/path
```
