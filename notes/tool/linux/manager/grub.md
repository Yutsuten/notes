---
title: Grub
ref: https://wiki.archlinux.org/title/GRUB
---

## Install

```shell
grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=GRUB
```

## Update configuration

Configuration file is at `etc/default/grub`.

After changes, apply with:

```shell
grub-mkconfig -o /boot/grub/grub.cfg
```

## Hibernation

Get UUID of the SWAP device.

```shell
sudo blkid
```

Edit `/etc/default/grub`.

```ini
GRUB_CMDLINE_LINUX_DEFAULT="audit=0 loglevel=3 quiet resume=UUID=69ea3ff3-1d78-4c72-8b42-b643415503d3"
```

Regenerate the `grub.cfg`.

```shell
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

Edit `/etc/mkinitcpio.conf`.

```ini
HOOKS=(base udev autodetect modconf block filesystems keyboard resume fsck)
```

Regenerate the initramfs.

```shell
sudo mkinitcpio -p linux
```

### Performance improvements

Increase hibernation size for speed.
Edit `/usr/lib/tmpfiles.d/`:

```txt
#Type   Path                     Mode   UID     GID     Age     Argument
w       /sys/power/image_size    -      -       -       -       6612792115
```

Reduce swappiness to prioritize memory.
Edit `/etc/sysctl.d/99-swappiness.conf`:

```ini
vm.swappiness=10
```

## Extra entry with custom option

The file to be edited is `/etc/grub.d/10_linux`.
Copy the default `linux entry` and add the custom options:

```diff
@@ -276,6 +276,8 @@
   if [ "x$is_top_level" = xtrue ] && [ "x${GRUB_DISABLE_SUBMENU}" != xtrue ]; then
     linux_entry "${OS}" "${version}" simple \
     "${GRUB_CMDLINE_LINUX} ${GRUB_CMDLINE_LINUX_DEFAULT}"
+    linux_entry "${OS} (with NVIDIA card)" "${version}" simple \
+    "${GRUB_CMDLINE_LINUX} ${GRUB_CMDLINE_LINUX_DEFAULT} optimus-manager.startup=nvidia"

     submenu_indentation="$grub_tab"
```
