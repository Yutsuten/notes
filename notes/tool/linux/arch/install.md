---
title: Install
ref: https://wiki.archlinux.org/index.php/Installation_guide
---

## Preparation

:::info
This installation guide is customized to my needs.
:::

Enable japanese keyboard.

```shell
loadkeys jp106
```

Check if boot mode is UEFI.

```shell
ls /sys/firmware/efi/efivars
```

Ensure system clock is accurate.

```shell
timedatectl set-ntp true
timedatectl status  # Check
```

:::tip
To connect to a Wifi, use `iwd`.
:::

## Installation

### Partition the disks

Get a list of available disks.

```shell
parted -l  # OR lsblk -f
```

Start partitioning the desired disk.
I prefer using `parted`.

```shell
parted /dev/nvme0n1  # fdisk /dev/nvme0n1
```

:::tip
Don't worry too much about filling the correct *fstype* in `parted`
(*fat12* does not exist, use *fat32* and it still works).
:::

Here some partition tables I've used:

```txt
Number  Start   End     Size    File system       Name                  Flags
 1      1049kB  538MB   537MB   fat32             EFI System Partition  boot, esp
 2      538MB   34.2GB  33.6GB                    SWAP Partition        swap
 3      34.2GB  1000GB  966GB   ext4              Root Partition

------------------------------------------------------

NAME        FSTYPE      FSVER LABEL   SIZE MOUNTPOINTS
nvme0n1                             931.5G
├─nvme0n1p1 vfat        FAT32 EFI     500M /efi
├─nvme0n1p2 swap        1     swap     32G [SWAP]
└─nvme0n1p3 ext4        1.0   root    899G /
```

```txt
Number  Start   End     Size    File system       Name                  Flags
 1      1049kB  3146kB  2097kB                    EFI System Partition  boot, esp
 2      3146kB  17.2GB  17.2GB                    SWAP Partition
 3      17.2GB  51.5GB  34.4GB  ext4              Root Partition
 4      51.5GB  1000GB  949GB                     Home Partition

------------------------------------------------------

NAME        FSTYPE      FSVER LABEL   SIZE MOUNTPOINTS
nvme0n1                             931.5G
├─nvme0n1p1 vfat        FAT12 EFI       2M /efi
├─nvme0n1p2 crypto_LUKS 2     swap     16G
│ └─encSwap swap        1              16G [SWAP]
├─nvme0n1p3 ext4        1.0   root     32G /
└─nvme0n1p4 crypto_LUKS 2     home  883.5G
  └─encHome ext4        1.0         883.5G /home
```

### Format the partitions

Print the current partitions:

```shell
parted -l
lsblk -f
```

:::info
If encrypting some partitions,
check `dm-crypt` notes.
:::

| Filesystem | Format command                       |
| ---------- | ------------------------------------ |
| UEFI       | `mkfs.fat -F32 -nEFI /dev/nvme0n1p1` |
| Swap       | `mkswap -L swap /dev/nvme0n1p2`      |
| Ext4       | `mkfs.ext4 -L root /dev/nvme0n1p3`   |
| NTFS       | `mkfs.ntfs -Q -L data /dev/sdXY`     |

### Mount the file system

`/mnt` will become the root of the new system.

Mount the root partition:

```shell
mount /dev/nvme0n1p3 /mnt
```

Mount other partitions:

```shell
mkdir /mnt/efi && mount /dev/nvme0n1p1 /mnt/efi
mkdir /mnt/home && mount /dev/nvme0n1p4 /mnt/home
```

### Install the system

To speed up installation,
update `/etc/pacman.conf` by enabling `ParallelDownloads` and `[multilib]`

```ini
ParallelDownloads = 5

[multilib]
Include = /etc/pacman.d/mirrorlist
```

To be on the safe side, update GPG keys:

```shell
pacman -Sy archlinux-keyring
```

Now use pacstrap to install the packages into the system.

```shell
xargs pacstrap /mnt < media/packages  # If batch installing
pacstrap /mnt base linux linux-firmware $ADD_MORE_HERE
```

- `base-devel` - Development packages
- `networkmanager` - Network connection manager and user applications
- `efibootmgr` `os-prober` (`grub`) - For boot
- `neovim` `man-db` `man-pages` - Basic tools

## Configuration

Generate a default fstab file (using the current mount setup as base).

```shell
genfstab -U /mnt >> /mnt/etc/fstab
```

Login as root into the new system:

```shell
arch-chroot /mnt
```

Set the time zone:

```shell
ln -sf /usr/share/zoneinfo/Japan /etc/localtime
hwclock --systohc
```

Uncomment needed locales in `/etc/locale.gen`:

```ini
en_US.UTF-8 UTF-8
ja_JP.UTF-8 UTF-8
```

And run:

```shell
locale-gen
```

Set the keyboard layout in `/etc/vconsole.conf`:

```ini
KEYMAP=jp106
```

Set the network configuration:

- Set the hostname in `/etc/hostname`
- Add matching entries to `/etc/hosts`

```txt
127.0.0.1 localhost
::1       localhost
```

Set the root password:

```shell
passwd
```

Setup the boot loader.

**Using grub:** (requires `grub` `efibootmgr`):

```shell
grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=GRUB
grub-mkconfig -o /boot/grub/grub.cfg
```

**Using UKI:**  (requires `efibootmgr` and at least 200M on UEFI partition):

```shell
# /etc/kernel/cmdline
root=UUID=1a3448da-b6df-400b-b85e-695cca6eeba1 rw loglevel=3 quiet splash

# /etc/mkinitcpio.d/linux.preset
ALL_kver="/boot/vmlinuz-linux"

PRESETS=('default' 'fallback')

default_uki="/efi/EFI/Linux/arch-linux.efi"
default_options="--splash /usr/share/systemd/bootctl/splash-arch.bmp"
fallback_uki="/efi/EFI/Linux/arch-linux-fallback.efi"
fallback_options="-S autodetect"

# Then run on a shell
mkdir -p /efi/EFI/Linux
mkinitcpio -p linux
efibootmgr --create --disk /dev/nvme0n1 --part 1 --label 'Arch Linux' --loader '\EFI\Linux\arch-linux.efi' --unicode
efibootmgr --create --disk /dev/nvme0n1 --part 1 --label 'Arch Linux Fallback' --loader '\EFI\Linux\arch-linux-fallback.efi' --unicode
efibootmgr --bootorder 0,1  # Adjust order, put fallback as second
```

The most basic configuration is done.
Now you can exit and reboot.

```shell
exit
reboot
```

## Post Install

### As root

- Configure `grub` or `/etc/kernel/cmdline` to support hibernation if going to use it
- Configure `dm-crypt` to unlock your partitions if using encryption
- Double check if `/etc/fstab` is correct
- Create and configure the new user

```shell
useradd -mG video,lp,wheel mateus
passwd mateus
usermod -s /usr/bin/fish mateus
```

- Give `sudo` permissions to users in `wheel` (run `EDITOR=nvim visudo`)

```txt
%wheel ALL=(ALL) ALL
```

- Give some extra permissions to users in `wheel` by editing `/etc/security/limits.conf`,
if applicable

```ini
#<domain>      <type>  <item>         <value>
@wheel         -       nice           -5
```

- Enable some services

```shell
systemctl enable NetworkManager
systemctl enable greetd
systemctl enable paccache.timer
```

### As user

Set the language.

```shell
localectl set-locale LANG=ja_JP.UTF-8
```

Import (and trust) your own GPG keys.

```shell
gpg -d gpg-master-keys.asc.gpg | gpg --import -
gpg --list-secret-keys --keyid-format short
gpg --edit-key KEYID
> trust
```

Restore password-store, ssh keys and other very basic stuff.

```shell
gpg -d keys.tar.zst.gpg | tar --zstd -x
```

Git clone repository with linux configuration, and apply configuration:

```shell
git clone git@github.com:Yutsuten/linux-config.git ~/.config/linux
cd ~/.config/linux
git submodule update --init
make
sudo make system
```

Set environment variables:

```shell
EDITOR=nvim sudo -e /etc/environment
# Copy contents of ~/.config/linux/system/env_vars
```

Add `setvtrgb` to `HOOKS` in `/etc/mkinitcpio.conf`,
and run `sudo mkinitcpio -p linux`.

```shell
HOOKS=(base udev setvtrgb autodetect modconf block filesystems keyboard resume fsck)
```

Start/enable some user timers:

```shell
systemctl --user start/enable wallpaper.timer
systemctl --user start/enable trash.timer
```

Update `pacman` mirror list:

```shell
curl -s "https://archlinux.org/mirrorlist/?country=CN&country=JP&country=TW&protocol=https&ip_version=4&use_mirror_status=on" | \
  sed -e 's/^#Server/Server/' -e '/^#/d' | \
  sudo rankmirrors /etc/pacman.d/mirrorlist
```

Restore backup:

```shell
bkptool -r
```

Mostly that's it.
For now on it's probably easier to continue as we have the basic stuff in place.
