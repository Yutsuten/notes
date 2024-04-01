---
title: Fish interactive
ref: https://fishshell.com/docs/current/interactive.html
---

## Shortcuts

| Shortcut | Description |
| --- | --- |
| `Alt+S` | Prepend `sudo` to the current or last commandline. |
| `Ctrl+R` | Open the history in a pager. Press `Shift+Del` to delete entries. |
| `Ctrl+u` | Clear from cursor to the **start** of entry. |
| `Ctrl+k` | Clear from cursor to the **end** of entry. |
| `Alt+left` `Alt+right` | Move backward/forward through the history. |

## Abbreviations

Add to the initialization file:

```fish
abbr -a dc docker-compose
```
