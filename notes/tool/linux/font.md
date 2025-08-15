---
title: Font
---

## Monospace fonts

Get a list of monospace fonts:

```shell
fc-list :mono
```

## Windows compability

Bellow fonts are useful if opening documents created on Windows:

```shell
sudo pacman -S ttf-liberation ttf-dejavu noto-fonts ttf-croscore
```

Update font cache:

```shell
fc-cache -fv
```
