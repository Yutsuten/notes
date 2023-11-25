---
title: Parted
ref: https://wiki.archlinux.org/index.php/Parted
---

## Usage

Replace `/dev/sda` with the device you wish to partition.

```shell
parted /dev/sda
```

Then you will enter in the command prompt.
To reset the partitions, run:

```txt
mklabel gpt
```

Then start creating the partitions.
The example bellow creates a swap partition with size of 8GB (size of my memory).
Using the `free -m` command we get the size of the memory in mebibytes (MiB),
and sum it with `261MiB`.

```txt
mkpart "EFI System Partition" fat32 1MiB 261MiB
mkpart "SWAP Partition" linux-swap 261MiB 8135MiB
mkpart "Root Partition" ext4 8135MiB 100%
```

When using EFI, we need to set the flag `esp` to its partition.

```txt
set 1 esp on
```

Disk partitioning is done.
Type `quit` to go back to shell.

### Partition label

[Persistent block device naming](https://wiki.archlinux.org/title/Persistent_block_device_naming)

If after formatting a partition you want to change the label,
use one of the commands bellow depending on the file system:

```shell
swaplabel -L newlabel /dev/XXX
e2label /dev/XXX newlabel
fatlabel /dev/XXX newlabel
ntfslabel /dev/XXX newlabel
cryptsetup config --label=newlabel /dev/XXX
```
