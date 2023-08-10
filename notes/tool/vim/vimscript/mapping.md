---
title: Mapping
---

```vim
let mapleader = '\'

nnoremap <leader>r :execute "!make"<CR>
nnoremap <leader>r :execute "silent !make"<CR>
nnoremap <leader>r :call jobstart(['make'])<CR>
```
