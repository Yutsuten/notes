---
title: Built in
---

## Ask for input

```vim
let default_value = 'default'
call inputsave()
let opts = {
      \ 'prompt': 'Choose a name: ',
      \ 'default': default_value,
      \ 'cancelreturn': default_value,
      \ }
let name = input(opts)
call inputrestore()
```

## Useful functions

| Function | Description |
| --- | --- |
| `printf(' %s ', myvar)` | Print formatted string. |
| `writefile(list, filename, flags)` | Save list of text into file. |
| `executable('binary-name')` | Check if `binary-name` is executable. |

## Load vim file

Use `%` for the current file.

```vim
so %
so $MYVIMRC
```
