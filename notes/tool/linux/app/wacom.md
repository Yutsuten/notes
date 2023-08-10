---
title: Wacom
ref: https://wiki.archlinux.org/index.php/wacom_tablet
---

## Install

```shell
sudo pacman -S xf86-input-wacom
```

## Configuration

These are the steps for a persistent configuration.

First find out the product names with the following command:

```shell
grep "Using input driver 'wacom'" /var/log/Xorg.0.log
```

Then configure the desired devices on `/etc/X11/xorg.conf.d/72-wacom-options.conf`.

Available options can be checked [here](https://jlk.fjfi.cvut.cz/arch/manpages/man/wacom.4).

```ini
Section "InputClass"
  Identifier "WACOM Pen stylus"
  MatchDriver "wacom"
  MatchProduct "Pen"
  NoMatchProduct "eraser"
  Option "Type" "stylus"
  Option "TopX" "2280"
  Option "TopY" "1425"
  Option "BottomX" "12920"
  Option "BottomY" "8075"
EndSection
```

## Tool

Any configuration using these steps is temporary and will be reset on reboot.

```shell
xsetwacom COMMAND
```

| Command | Description |
| --- | --- |
| `list devices` | Display detected devices. |
| `set 'device name' parameter VALUES` | Set device parameter |
| `get 'device name' all` | Get device parameters |

## Example

```shell
xsetwacom set 'Wacom Intuos S Pen stylus' Area 2280 1425 12920 8075
xsetwacom get 'Wacom Intuos S Pen stylus' all
```
