---
title: Buffer
---

## Creating or editing files

The syntax is:

```shell
COMMAND OPTION PATH
```

| Command | Description |
| --- | --- |
| `new` | Create a new file in a new window. |
| `e` `find` | Edit a file. |
| `n` | Edit one or more files. |

| Option | Description |
| --- | --- |
| `+N` | Open the file and move cursor to the specified line number. |
| `+/search` | Open the file and jump to the first result of the search. |

| Path | Description |
| --- | --- |
| `*` | File or folder name globbing. Ex: `test*.py` |
| `**` | Folders globbing. Ex: `src/**/file.py` |
| `%:h` | Path to the current directory. |
| `scp://srv-name/` | Path to a remote file. Path defaults to home directory. Add one more `/` for absolute path. |

## Buffer navigation

| Command | Description |
| --- | --- |
| `ls` `buffers` | List current opened buffers. |
| `b` | Open buffer. Buffer number or file name can be used. |
| `bn` `bp` | Next or previous buffer. |
| `bd` | Delete buffer. Buffer number or file name can be used. |

### Tips

Close all buffers but current.

```vim
%bd|e#
```

Close buffer without closing window.

```vim
bp|bd #
```
