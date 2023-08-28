---
title: Android File Transfer
arch: android-file-transfer
ref: https://github.com/whoozle/android-file-transfer-linux
---

## Listing devices

```shell
lsusb
```

Debug accessing the devices:

```shell
aft-mtp-cli -v
```

If a device should be accessible but it is not,
[grant permission to it](/tool/linux/manager/udev#add-permission-to-access-device).

## Mounting with FUSE

```shell
aft-mtp-mount -o allow_other /media/mtp
fusermount -u /media/mtp
```

Check the mounted devices with either `findmnt` or `df -h --output=source,target`.

### Sync files

Sync some file with, for example, `rsync`:

```shell
rsync --recursive --inplace --size-only --delete --omit-dir-times --no-perms --verbose ~/Music/ /media/mtp/SDカード/Music/
```

### Copy files

When copying files, add this option to avoid errors:

```shell
cp --no-preserve=mode SOURCE TARGET
```
