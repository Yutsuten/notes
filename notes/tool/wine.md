---
title: Wine
ref: https://wiki.winehq.org/FAQ#How_do_I_clean_the_Open_With_List.3F
---

## Clean the Open With list

`wine` messes up with `xdg-open` by adding several desktop entries.
Cleanup with:

```shell
rm -f ~/.local/share/mime/packages/x-wine*
rm -f ~/.local/share/applications/wine-extension*
rm -f ~/.local/share/icons/hicolor/*/*/application-x-wine-extension*
rm -f ~/.local/share/mime/application/x-wine-extension*
```
