---
title: Theme
ref: https://wiki.archlinux.org/title/Cursor_themes
---

## Tools

| Distro | Qt5 | GTK |
| --- | --- | --- |
| Arch Linux | `qt5ct` `kvantum-qt5` | `lxappearance-gtk3` |

## Cursor

### Manual installation

After you download a cursor theme (for example, [Vimix cursors theme](https://www.gnome-look.org/p/1358330/)),
extract it to `~/.local/share/icons` to aplly it for current user only,
or to `/usr/share/icons` to apply it system wide.

```shell
sudo tar xf 01-Vimix-cursors.tar.xz -C /usr/share/icons
```

### Set current cursor

To set the cursor only for your user, either:

1. Run `lxappearance` and set it on the GUI.
2. Create or update `~/.icons/default/index.theme` and `~/.config/gtk-3.0/settings.ini`

To set the cursor globally, either:

1. (Preferred) Update `/usr/share/icons/default/index.theme`
2. Create a symlink: `sudo ln -fns ../Vimix-cursors/cursors /usr/share/icons/default/cursors`

```ini
## index.theme
[Icon Theme]
Inherits=Vimix-cursors
```

```ini
## ~/.config/gtk-3.0/settings.ini
[Settings]
gtk-cursor-theme-name=Vimix-cursors
```
