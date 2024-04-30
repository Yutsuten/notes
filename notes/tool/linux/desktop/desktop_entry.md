---
title: Desktop entry
ref: https://wiki.archlinux.org/title/desktop_entries
---

## Freedesktop specification

Full documentation [here](https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html#recognized-keys).

- [Registered Categories](https://specifications.freedesktop.org/menu-spec/latest/apa.html)

## Create entry

User defined desktop entries are at `~/.local/share/applications/`.

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

If moving the file to `/usr/share/pixmaps`,
specifying only the name is enough:

```txt
[Desktop Entry]
Icon=osu
```
