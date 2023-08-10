---
title: Power
ref: https://wiki.archlinux.org/index.php/Power_management/Suspend_and_hibernate
---

## Suspend to disk

The configuration is a two step process:

- Configure kernel parameters
- Configure initramfs

### Configure kernel parameters

#### On SWAP partition

Get the UUID of the SWAP device:

```shell
sudo blkid
```

Edit the file `/etc/default/grub`
by adding the following values to `GRUB_CMDLINE_LINUX_DEFAULT` (replace *swap_device*):

```ini
resume=UUID=swap_device
```

Apply the changes with:

```shell
grub-mkconfig -o /boot/grub/grub.cfg
```

#### On SWAP file

Consider a swap file at `/swapfile`.
Get *swap_device* and *swap_file_offset* by running:

```shell
findmnt -no UUID -T /swapfile
filefrag -v /swapfile | awk '{ if($1=="0:"){print substr($4, 1, length($4)-2)} }'
```

Edit the file `/etc/default/grub`
by adding the following values to `GRUB_CMDLINE_LINUX_DEFAULT`:

```ini
resume=UUID=swap_device resume_offset=swap_file_offset
```

Apply the changes with:

```shell
grub-mkconfig -o /boot/grub/grub.cfg
```

### Configure initramfs

Edit the file `/etc/mkinitcpio.conf`
by adding `resume` to `HOOKS` as follows:

```ini
HOOKS=(base udev autodetect modconf block filesystems keyboard resume fsck)
```

Regenerate the initramfs:

```shell
mkinitcpio -P
```
