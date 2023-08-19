---
title: Installer
ref: https://aur.archlinux.org/packages/woeusb
---

## The use case

Due to `dd` not working for windows installers sometimes,
a different tool is recommended.

## Install

To create Windows USB stick installer, install `woeusb` from the AUR.

## Usage

```shell
woeusb --help
sudo woeusb --device Win10_21H2_Japanese_x64.iso /dev/sda
```
