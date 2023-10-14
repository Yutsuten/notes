---
title: dm-crypt
ref: https://wiki.archlinux.org/title/Dm-crypt
arch: cryptsetup
---

## Wipe disk

Example of wiping `/dev/sdb`, creating a partition called `enc1` (encrypted1):

```shell
sudo cryptsetup open --type plain --key-file /dev/urandom /dev/sdb enc1
# sudo cryptsetup open --type plain --cipher aes-xts-plain64 --key-file /dev/urandom /dev/sdb enc1
sudo dd if=/dev/zero of=/dev/mapper/enc1 status=progress bs=1M
sudo cryptsetup close enc1
```

## Encrypted file system

Create encrypted partition:

```shell
sudo cryptsetup -y -v luksFormat /dev/sdb
```

Open volume:

```shell
sudo cryptsetup open /dev/sdb enc1
```

Create the file system:

```shell
sudo mkfs.ext4 /dev/mapper/enc1
```

## Mount and unmount

Mount

```fish
sudo cryptsetup open /dev/sdb enc1
sudo mount -o nodev,nosuid,noexec /dev/mapper/enc1 /media/hdd1
```

Unmount

```fish
sudo umount /media/hdd1 && sudo sync
sudo cryptsetup close enc1
```
