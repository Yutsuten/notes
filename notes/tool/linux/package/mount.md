---
title: Mount
ref: https://man.archlinux.org/man/mount.8.en
---

## List devices

To list devices that can be mounted:

```shell
lsblk
```

## Mount

Then mount the device with:

```shell
mount OPTIONS /dev/sdXN /home/user/Mount
```

| Option | Description |
| --- | --- |
| `-o` `--options` | Use the specified mount options. The argument is a comma-separated list. |

### Examples

File systems used for data may be mounted with lower permissions (for security).

```fish
mount -o nodev,nosuid,noexec /dev/sdc1 ~/Mount
```

Set the `gid` and `uid` of the device (needed if not a Linux file system).

```fish
mount -o nodev,nosuid,noexec,uid=(id -u),gid=(id -g) /dev/sdc1 ~/Mount
```

Set `fmask` to remove execution permission from files:

```fish
mount -o nodev,nosuid,noexec,fmask=111 /dev/sdc1 ~/Mount
```

## Unmount

Unmount the device with:

```shell
umount /dev/sdXN && sudo sync
```
