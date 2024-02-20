---
title: Movement
---

## Cursor movement

| Shortcut | Description |
| --- | --- |
| `h` | Move one character left |
| `j` | Move one row down |
| `k` | Move one row up |
| `l` | Move one character right |
| `w` | Move to beginning of next word |
| `b` | Move to previous beginning of word |
| `e` | Move to end of word |
| `W` | Move to beginning of next WORD |
| `B` | Move to beginning of previous WORD |
| `E` | Move to end of next WORD |

## Inline movements

| Shortcut | Description |
| --- | --- |
| `fX` | To next 'X' after cursor, in the same line (X is any character) |
| `FX` | To previous 'X' before cursor (f and F put the cursor on X) |
| `tX` | Til next 'X' (similar to above, but cursor is before X) |
| `TX` | Til previous 'X' |
| `;` | Repeat above, in same direction |
| `,` | Repeat above, in reverse direction |
| `0` | Move to beginning of line |
| `$` | Move to end of line |
| `_` | Move to first non-blank character of the line |
| `^` | Move to first non-blank character of the line |
| `g_` | Move to last non-blank character of the line |

## File movements

| Shortcut | Description |
| --- | --- |
| `H` | Move to top of screen |
| `M` | Move to middle of screen |
| `L` | Move to bottom of screen |
| `%` | Jump to matching bracket { } [ ] ( ) |
| `gg` | Move to first line |
| `G` | Move to last line |
| `ngg` | Move to n'th line of file (n is a number; 12gg moves to line 12) |
| `nG` | Move to n'th line of file (n is a number; 12G moves to line 12) |
| `*` | Next whole word under cursor |
| `#` | Previous whole word under cursor |
| `gd` | Go to definition/first occurrence of the word under cursor |
| `gf` | Go to file under cursor |

## Screen scroll

| Shortcut | Description |
| --- | --- |
| `zz` | Move cursor to center of screen |
| `zt` | Move cursor to top of screen |
| `zb` | Move cursor to bottom of screen |
| `Ctrl-B` | Scroll backward (up) |
| `Ctrl-F` | Scroll forward (down) |
| `Ctrl-U` | Scroll half up |
| `Ctrl-D` | Scroll half down |
| `Ctrl-Y` | Scroll up (one line) |
| `Ctrl-E` | Scroll down (one line) |
| `Ctrl-I` | Redo cursor movement |
| `Ctrl-O` | Undo cursor movement |
