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

| Function | Description |
| --- | --- |
| `expand()` | Expand a file or path. |
| `fnamemodify()` | Modify a file or path. |
| `tempname()` | Generate temporary filenames. |

To deal with filenames and its paths we use
`expand()` and `fnamemodify()`.

```vim
let curfile = expand('%:~:.')
let arbitrary = fnamemodify('myfile', ':p:~')
```

:::tip
For more see `help filename-modifiers`.
:::

| Modifier | Description |
| --- | --- |
| `:p` | Expand to full path. |
| `:h` | Head (last path component removed). |
| `:t` | Tail (last path component only). |
| `:r` | Root (one extension removed). |
| `:e` | Extension only. |
| `:~` | Replaces `$HOME` with `~`. |
| `:.` | Path becomes relative to `$PWD`. |
