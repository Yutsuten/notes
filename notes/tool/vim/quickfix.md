---
title: Quickfix
---

## Overview

The quickfix list is filled on commands like `:vimgrep` or `:grep`.

## Cycle list

| Command | Description | Argument default |
| --- | --- | --- |
| `:cc` | Jump to location at index NR. | NR: current index |
| `:cn` | Jump COUNT positions forward. | COUNT: 1 |
| `:cp` | Jump COUNT positions backward. | COUNT: 1 |
| `:clist` `:copen` | List or open window with all quickfixes. | |

## Manually populate the quick list

Fill with the output of `git grep`.

- The option `-n` / `--line-number` (prefix the line number to matching lines) is needed.
- The option `--column` is optional.

```vim
:cex system("git grep -n --column pattern")
```
