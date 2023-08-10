---
title: Pacman
man: pacman
ref: https://wiki.archlinux.org/title/Mirrors
---

## Parallel downloads

Edit `/etc/pacman.conf`:

```ini
ParallelDownloads = 10
```

## Mirrors

[Mirror List Generator](https://archlinux.org/mirrorlist)

Choose nearby, sort by speed and remove out-of-sync mirrors.
Example command to generate a good `/etc/pacman.d/mirrorlist`:

```shell
curl -s "https://archlinux.org/mirrorlist/?country=CN&country=JP&country=TW&protocol=https&ip_version=4&use_mirror_status=on" | \
  sed -e 's/^#Server/Server/' -e '/^#/d' | \
  rankmirrors -
```
