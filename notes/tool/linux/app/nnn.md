---
title: Nnn
arch: nnn
brew: nnn
man: nnn
ref: https://github.com/jarun/nnn/wiki
---

## Shortcuts

| Shortcut | Description |
| --- | --- |
| `C-l` | Clear filter |
| `mm` | Clear selection |

## Show cp/mv progress

A patched version of `cp` and `mv` is needed.
Rename it to `cpg` and `mvg` and put it into PATH.

```shell
curl -o "coreutils-9.0.tar.xz" http://ftp.gnu.org/gnu/coreutils/coreutils-9.0.tar.xz
tar xvJf coreutils-9.0.tar.xz
cd coreutils-9.0/
curl -o "advcpmv-0.9-9.0.patch" https://raw.githubusercontent.com/jarun/advcpmv/master/advcpmv-0.9-9.0.patch
patch -p1 -i advcpmv-0.9-9.0.patch
./configure
make
cp src/cp ~/.local/bin/cpg
cp src/mv ~/.local/bin/mvg
```
