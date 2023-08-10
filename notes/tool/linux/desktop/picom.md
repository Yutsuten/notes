---
title: Picom
ref: https://wiki.archlinux.org/index.php/Picom
---

## Install

```shell
sudo pacman -S picom
```

## Setup

Add this to `.xprofile` to start picom on login.

```shell
picom -b
```

Copy the default configuration.

```shell
cp /etc/xdg/picom.conf.example ~/.config/picom.conf
```

Then customize as desired.

```ini
fading = false
inactive-opacity = 0.7;
backend = "glx"
```
