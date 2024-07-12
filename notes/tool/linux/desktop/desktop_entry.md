---
title: Desktop entry
ref: https://wiki.archlinux.org/title/desktop_entries
---

## Freedesktop specification

Full documentation [here](https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html#recognized-keys).

- [Registered Categories](https://specifications.freedesktop.org/menu-spec/latest/apa.html)
- [Icon Theme Specification](https://specifications.freedesktop.org/icon-theme-spec/icon-theme-spec-latest.html)

## Create entry

Desktop entries are defined at:

- User: `~/.local/share/applications`
- System: `/usr/share/applications`

For example, to add a desktop entry for the application `osu`,
add a file called `osu.desktop` with:

```txt
[Desktop Entry]
Type=Application
Name=Osu!
Comment=Rhythm is just a click away
Categories=Game
Exec=/usr/local/games/osu.AppImage
Terminal=false
```

**Note:** Only `Type` and `Name` are required.

### Icon

To add icon, specify the path to it in `Icon`:

```txt
[Desktop Entry]
Icon=/usr/share/pixmaps/osu.png
```

Icons are looked for in the following directories:

1. `$HOME/.icons` (for backwards compatibility)
2. `$XDG_DATA_DIRS/icons`
3. `/usr/share/pixmaps`

If moving the file to any of these directories,
specifying only the name is enough:

```txt
[Desktop Entry]
Icon=osu
```

Some apps add icons in other places (like `/usr/share/icons/hicolor/scalable/apps/xxx.svg`).
Run the command bellow so the icon can be found:

```shell
sudo gtk-update-icon-cache
```

## Default terminal

If using `Terminal=true`,
[we need a workaround](https://todo.sr.ht/~scoopta/wofi/73) to open on newer terminals.

```shell
sudo ln -s /usr/bin/alacritty /usr/bin/xterm
```
