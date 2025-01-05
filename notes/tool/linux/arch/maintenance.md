---
title: Maintenance
ref: https://wiki.archlinux.org/title/System_maintenance
---

## Downgrade package

[Arch Wiki reference](https://wiki.archlinux.org/title/Downgrading_packages)

Check the latest updates in `/var/log/pacman.log`.
To downgrade a package, run (example of `svt-av1`):

```shell
sudo pacman -U file:///var/cache/pacman/pkg/svt-av1-2.2.1-1-x86_64.pkg.tar.zst
```

Then to prevent upgrade of that package,
edit `/etc/pacman.conf`:

```txt
IgnorePkg = svt-av1
```

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
