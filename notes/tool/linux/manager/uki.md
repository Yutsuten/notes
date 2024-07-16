---
title: UKI
ref: https://wiki.archlinux.org/title/Unified_kernel_image
---

## Boot kernel directly from UEFI

:::tip
With this setup there is no need to use `grub`.
:::

Configure the kernel command line in `/etc/kernel/cmdline`.
Example:

```shell
root=UUID=1a3448da-b6df-400b-b85e-695cca6eeba1 rw loglevel=3 quiet splash cryptdevice=/dev/disk/by-label/swap:encSwap cryptkey=/dev/disk/by-label/USB_LOADER:vfat:/swap_keyfile resume=/dev/mapper/encSwap
```

Next modify `/etc/mkinitcpio.d/linux.preset` as follows:

- Un-comment the `PRESET_uki=` parameter for each item in `PRESETS=`,
- Optionally, comment out `PRESET_image=` to avoid storing a redundant `initramfs-*.img` file,
- Optionally, add or un-comment the --splash parameter to each `PRESET_options=` line for which you
want to add a splash image.

Example:

```shell
# mkinitcpio preset file for the 'linux' package

#ALL_config="/etc/mkinitcpio.conf"
ALL_kver="/boot/vmlinuz-linux"

PRESETS=('default' 'fallback')

#default_config="/etc/mkinitcpio.conf"
#default_image="/boot/initramfs-linux.img"
default_uki="/efi/EFI/Linux/arch-linux.efi"
default_options="--splash /usr/share/systemd/bootctl/splash-arch.bmp"

#fallback_config="/etc/mkinitcpio.conf"
#fallback_image="/boot/initramfs-linux-fallback.img"
fallback_uki="/efi/EFI/Linux/arch-linux-fallback.efi"
fallback_options="-S autodetect"
```

Build the UKIs into `/efi/EFI/Linux`:

```shell
mkdir -p /efi/EFI/Linux
mkinitcpio -p linux
```

**Note:** Make sure to have enough space in the *efi* partition.

```txt
> du -ha /efi
52M	/efi/EFI/Linux/arch-linux.efi
125M	/efi/EFI/Linux/arch-linux-fallback.efi
176M	/efi/EFI/Linux
177M	/efi/EFI
4.0K	/efi/loader/random-seed
8.0K	/efi/loader
177M	/efi
```

Finally we can boot directly from UEFI using `efibootmgr`:

```shell
efibootmgr --create --disk /dev/nvme0n1 --part 1 --label 'Arch Linux' --loader '\EFI\Linux\arch-linux.efi' --unicode
```
