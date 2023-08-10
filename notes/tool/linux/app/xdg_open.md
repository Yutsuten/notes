---
title: Xdg open
ref: https://wiki.archlinux.org/title/XDG_MIME_Applications
---

## Set default

If you do not know the MIME type of the file, run:

```shell
xdg-mime query filetype FILE
```

Set the application that will be chosen when `xdg-open` a file with that MIME type:

```shell
xdg-mime default vimiv.desktop image/jpeg
```
