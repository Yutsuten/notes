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

| Mount option | Description                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `nodev`      | Do not interpret character or block special devices on the filesystem.                                            |
| `nosuid`     | Do not honor set-user-ID and set-group-ID bits or file capabilities when executing programs from this filesystem. |
| `noexec`     | Do not permit direct execution of any binaries on the mounted filesystem.                                         |
| `loop`       | Mount via the loop device.                                                                                        |
| `uid=`       | Make all files in the filesystem belong to the given user.                                                        |
| `gid=`       | Make all files in the filesystem belong to the given group.                                                       |
| `fmask=`     | Set the `umask` applied to regular files.                                                                         |

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

Mount a file that has a filesystem into it:

```fish
mount -o loop somefile ~/Mount
```

## Unmount

Unmount the device with:

```shell
umount /dev/sdXN
```
