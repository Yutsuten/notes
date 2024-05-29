---
title: Editing
nvim: editing.txt
---

## Edit a file

| Command | Description |
| --- | --- |
| `edit` `find` | Edit a file. |

| Option | Description |
| --- | --- |
| `+N` | Open the file and move cursor to the specified line number. |
| `+/search` | Open the file and jump to the first result of the search. |

## Argument list

Open files as arguments:

```vim
:args notes/**/*.md
```

Argument navigation:

| Command | Description |
| --- | --- |
| `ar` | List arguments or define new argument list. |
| `n` `N` | Next or previous argument. |
| `fir` `la` | Jump to first or last argument. |
| `argu` | Jump to argument NUM, defaults to current. |

## Write to file

| Command | Description |
| --- | --- |
| `write` `update` | Write buffer contents to file, or only if there are changes. |
| `saveas` | Save as |

## Current directory

Use `pwd` to get the current directory name.

| Command | Change directory scope |
| --- | --- |
| `cd` `chd` | Global |
| `tcd` `tch` | Tab only |
| `lcd` `lch` | Local (current window) |

## File searching

| Path | Description |
| --- | --- |
| `*` | File or folder name globbing. Ex: `test*.py` |
| `**` | Folders globbing. Ex: `src/**/file.py` |
| `%:h` | Path to the current directory. |
| `scp://srv-name/` | Path to a remote file. Path defaults to home directory. Add one more `/` for absolute path. |

When using globs, use `Tab` to auto-complete one entry,
or `C-a` to auto-complete all available entries.
