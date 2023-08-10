---
title: Lightdm
ref: https://wiki.archlinux.org/index.php/LightDM
---

## Usage

```shell
dm-tool COMMAND
```

| Command | Description |
| --- | --- |
| `switch-to-greeter` | Switch to the greeter. |
| `lock` | Lock the current seat. Same as `switch-to-greeter`, but turns off the screen. |

To enable LightDM, run this:

```shell
systemctl enable lightdm
```

### Seat configuration

If using Xorg's Keypad Mouse Keys feature,
there is an annoying feature that automatically disables it after 2 minutes of inactivity.
Start X with `+accessx 0` option to solve this.
[Available options](https://helpmanual.io/help/Xorg/)

Edit `/etc/lightdm/lightdm.conf` and add:

```ini
[Seat:*]
xserver-command=X +accessx 0
```

Alternative: `xkbset` can also be used to solve this issue.
[Reference](https://bbs.archlinux.org/viewtopic.php?id=254660)

## Greeters

### GTK greeter

To change the wallpaper,
copy the wallpaper to `/usr/share/pixmaps/` directory,
then set it in the file `/etc/lightdm/lightdm-gtk-greeter.conf`:

```ini
[greeter]
background=/usr/share/pixmaps/wallpaper.jpg
```

### Slick greeter

[GitHub Repository](https://github.com/linuxmint/slick-greeter)

Update the following line on `/etc/lightdm/lightdm.conf`:

```ini
greeter-session=lightdm-slick-greeter
```

Configure it on `/etc/lightdm/slick-greeter.conf`:

```ini
[Greeter]
background=/usr/share/pixmaps/background.png
show-hostname=true
show-a11y=false
show-keyboard=true
show-clock=true
show-quit=true
clock-format=%Y年%m月%d日 (%a) %H:%M:%S
```
