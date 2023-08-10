---
title: Sshfs
---

## Usage

Mount:

```shell
sshfs user@host:/home/user ~/Mount -o idmap=user,ro,reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

Unmount:

```shell
fusermount3 -u ~/Mount
```
