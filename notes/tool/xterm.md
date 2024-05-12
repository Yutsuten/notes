---
title: Xterm
---

## Install

```bash
sudo apt install xterm x11-xserver-utils
```

## Configuration

User configuration file is at `~/.Xresources`.

```txt
xterm*faceName: Noto Mono
xterm*faceSize: 9
xterm*geometry: 150x35
```

[Solarized theme](https://github.com/solarized/xresources) can also be configured.

Then load the configuration with:

```bash
xrdb ~/.Xresources
```

## Usage

Scroll with `Shift+PgUp` `Shift+PgDn`.
