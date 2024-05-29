---
title: Diff
---

## Usage

| Command | Description |
| --- | --- |
| `diffthis` | Add current window to the diff (needs two files). |
| `diffoff` | Remove current window from the diff. |

### Diff current tab windows

It may be useful to use the `windo` command,
that runs a command to all visible windows.

With two windows opened:

```vimscript
windo diffthis
windo diffoff
```

### Open and diff

With one of the files opened,
open the another with:

```vimscript
vert diffsplit FILE2
```
