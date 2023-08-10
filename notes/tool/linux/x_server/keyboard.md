---
title: Keyboard
ref: https://wiki.archlinux.org/title/Xorg/Keyboard_configuration
man: xkeyboard-config
---

## Current settings

```shell
setxkbmap -print -verbose 10
```

## Setup

Configure the keyboard with:

```shell
localectl --no-convert set-x11-keymap LAYOUT MODEL VARIANT OPTIONS
```

### Options

Separate each option with a `,` (comma).

| XkbOption | Description |
| --- | --- |
| `grp:win_space_toggle` | Switch to another layout with `Win+Space`. |
| `caps:capslock` | Caps Lock toggles normal capitalization of alphabetic characters. |
| `keypad:pointerkeys` | `Shift+NumLock` enables PointerKeys. |

#### Example

```shell
localectl --no-convert set-x11-keymap jp,br '' '' caps:capslock,keypad:pointerkeys
```

The resulting `/etc/X11/xorg.conf.d/00-keyboard.conf` should be like this:

```ini
Section "InputClass"
    Identifier "system-keyboard"
    MatchIsKeyboard "on"
    Option "XkbLayout" "jp,br"
    Option "XkbOptions" "caps:capslock,keypad:pointerkeys"
EndSection
```

## Commands

Options can be set for the current session with `setxkbmap`.
Example:

```shell
setxkbmap -option keypad:pointerkeys
```
