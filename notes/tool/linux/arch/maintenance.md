---
title: Maintenance
ref: https://wiki.archlinux.org/title/System_maintenance
---

## System cleanup

Every week, delete all cached versions of installed and uninstalled packages,
except for the most recent three:

```shell
sudo systemctl start/enable paccache.timer
```

Remove all the cached packages that are not currently installed,
and the unused sync database:

```shell
sudo pacman -Sc
```

## Missing .so file

Search for package that installs a missing `.so` file:

```shell
pkgfile -s libcrypt.so.1
```
