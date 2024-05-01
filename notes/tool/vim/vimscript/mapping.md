---
title: Mapping
---

## Leader key

```vim
let mapleader = '\'

nnoremap <leader>r :execute "!make"<CR>
nnoremap <leader>r :execute "silent !make"<CR>
nnoremap <leader>r :call jobstart(['make'])<CR>
```

## Shift Ctrl keys

Help with `:help <>`

Syntax is `<C-KEY>`, where you change KEY to the desired key.
For `F` keys, [some math must be done](https://github.com/neovim/neovim/issues/4862#issuecomment-282988543):

| Don't work | Works | Explanation |
| --- | --- | --- |
| `<S-Fx>` | `<Fy>` | `y = x + 12` |
| `<C-Fx>` | `<Fy>` | `y = x + 24` |

Example:

```vim
nnoremap <F9> :!make<CR>
nnoremap <F33> :!make build<CR>  " <C-F9>
nnoremap <F34> :!make run<CR>    " <C-F10>
```
