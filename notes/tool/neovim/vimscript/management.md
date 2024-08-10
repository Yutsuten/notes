---
title: Management
nvim: builtin.txt
---

## Functions

When dealing with tabs, windows and buffers,
there are a few useful functions:

| Function | Description |
| --- | --- |
| `bufexists()` | Returns `true` if the buffer exists. |
| `bufnr()` | Number of a buffer. |
| `tabpagenr()` | Number of the current tab page. |
| `tabpagewinnr()` | Number of the window in the context of tab pages. |

When getting the number of a buffer/window etc, one can use:

- `$` to get the number of entries (higher buffer number, number of windows)
- `#` to get the last accessed entry number (last buffer or window)

## Examples

To get the number of windows in the current tab:

```vim
tabpagewinnr(tabpagenr(), '$')
```
