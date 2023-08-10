---
title: Statusline
---

## File name

Show only filename:

```vim
expand('%:t')
```

Show relative path shortened (1 character per folder):

```vim
pathshorten(fnamemodify(expand('%'), ':~:.'))
```
