---
title: Tabpage
vim: tabpage.txt
---

## Create tab

On netrw, use `t` to open the highlighted file into a new tab.

| Command | Description |
| --- | --- |
| `:tabe file` | Open file in new tab |
| `:tabc` | Close current tab |
| `:tabo` | Close all but current tab |

## Manage tabs

| Shortcut | Command | Description |
| --- | --- | --- |
| `Ngt` | `:tabn N` | Go to tab `N` |
| `gt` `C-PageDown` | `:tabn` | Go to next tab |
| `gT` `C-PageUp` | `:tabp` `:tabN` | Go to previous tab |
| | `:tabm N` | Move current tab to after tab `N` |
| | `:tabm +N` `:tabm -N` `:+Ntabm` `:-Ntabm` | Move current tab `N` places to right/left |
