---
title: File
nvim: writefile()
---

## Functions

| Function | Description |
| --- | --- |
| `executable(fname)` | Check if `fname` is executable. |
| `filereadable(fname)` | Returns `true` if the file is readable. |
| `filewritable(fname)` | Returns `true` if the file is writable. |
| `readfile(fname)` | Returns a `list`, which each entry is a file line. |
| `writefile(list, fname, flags)` | Save list of text into file. |

## Filenames

To deal with filenames and its paths we use
`expand()` and `fnamemodify()`.

```vim
let curfile = expand('%:~:.')
let arbitrary = fnamemodify('myfile', ':p:~')
```

| Modifier | Description |
| --- | --- |
| `:p` | Expand to full path. |
| `:h` | Head (last path component removed). |
| `:t` | Tail (last path component only). |
| `:r` | Root (one extension removed). |
| `:e` | Extension only. |
| `:~` | Replaces `$HOME` with `~`. |
| `:.` | Replaces `$PWD` with `.`. |

To generate temporary filenames we use `tempname()`.
