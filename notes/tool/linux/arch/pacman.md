---
title: Pacman
man: pacman
ref: https://wiki.archlinux.org/title/Mirrors
---

## Usage

| Command | Description |
| --- | --- |
| `pacman -Syu` | Update all packages |
| `pacman -S package` | Install new package |
| `pacman -Rs package` | Remove a package. Add `-c` for cascade, `-u` for group of packages |
| `pacman -Qtdq \| pacman -Rns -` | Remove orphaned packages |
| `pacman -Qe` | List all packages explicitly installed and not required as dependencies |
| `pacman -Qi package` | Check information of a package that is installed. |
| `pacman -Si package` | Check information of a package that may not be installed. |

## Configuration

### Parallel downloads

Edit `/etc/pacman.conf`:

```ini
ParallelDownloads = 10
```

### Update mirrors

[Mirror List Generator](https://archlinux.org/mirrorlist)

Choose nearby, sort by speed and remove out-of-sync mirrors.
Example command to generate a good `/etc/pacman.d/mirrorlist`:

```shell
curl -s "https://archlinux.org/mirrorlist/?country=CN&country=JP&country=TW&protocol=https&ip_version=4&use_mirror_status=on" | \
  sed -e 's/^#Server/Server/' -e '/^#/d' | \
  rankmirrors -
```

## AUR

```shell
makepkg -sicr
```

| Option | Description |
| --- | --- |
| `-s` | Syncronize and install dependencies with pacman |
| `-i` | Install |
| `-c` | Clean build files |
| `-r` | Remove dependencies installed by `-s` |
