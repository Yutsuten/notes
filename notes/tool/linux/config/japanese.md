---
title: Japanese
ref: https://wiki.archlinux.org/index.php/Localization/Japanese
---

## Fonts

```shell
pacman -S noto-fonts-cjk noto-fonts-emoji noto-fonts
```

## Input

### Ibus Anthy

[IBus documentation](https://wiki.archlinux.org/index.php/IBus)

```shell
pacman -S ibus-anthy
```

Add the following at the end of `~/.xprofile`.

```shell
export GTK_IM_MODULE=ibus
export XMODIFIERS=@im=ibus
export QT_IM_MODULE=ibus
ibus-daemon -drx --panel /usr/lib/ibus/ibus-ui-gtk3
```

On KDE, use the following to integrate Kimpanel with IBus.

```shell
ibus-daemon -drx --panel=/usr/lib/kimpanel-ibus-panel
```

Then you have to add the widget `Input methods panel`.

Reboot the system, and setup Ibus with the following:

```shell
ibus-setup
```

### Fcitx Mozc

[Fcitx documentation](https://wiki.archlinux.org/index.php/Fcitx) |
[Mozc documentation](https://wiki.archlinux.org/index.php/Mozc)

```shell
pacman -S fcitx-mozc fcitx-im fcitx-configtool
```

Update `~/.pam_environment`.

```txt
GTK_IM_MODULE DEFAULT=fcitx
QT_IM_MODULE  DEFAULT=fcitx
XMODIFIERS    DEFAULT=\@im=fcitx
```

Reboot the system.
If for any reason it is not running,
you can run `fcitx` to start.

Configure with `fcitx-configtool`.
You must add Mozc Input Method as second on the list.

#### Commands

```shell
fcitx-remote OPTION
```

| Option | Description |
| --- | --- |
| `-o` | Activate input method. |
| `-c` | Inactivate input method. |
| `-t` | Toggle active/inactive. |
| `-s` | Switch to a input method. Example: `mozc` `fcitx-keyboard-jp`. For all options, run `fcitx-diagnose`. |

```shell
/usr/lib/mozc/mozc_tool --mode=config_dialog
```

Another available modes are `dictionary_tool` `word_register_dialog` `hand_writing` `character_palette`.

### Uim

[Uim documentation](https://wiki.archlinux.org/index.php/Uim)

```shell
pacman -S uim
```

Update `~/.xprofile`.

```txt
export GTK_IM_MODULE=uim
export QT_IM_MODULE=uim
export XMODIFIERS=@im=uim
```

Start it by running `uim-xim` (it may be on `.xprofile`).

For preferences, run `uim-pref-*`.
