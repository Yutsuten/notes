---
title: Remote
nvim: remote.txt
---

## Nested neovim

Inside a `terminal` window,
send some commands to the existing `nvim` instance.

```shell
nvim --server $NVIM --remote-send '<C-\><C-N>:source Session.vim<CR>:bdelete! #<CR>'
```

The alias bellow will open a file within the current `nvim` instance.

```shell
alias nvim='nvim --server $NVIM --remote'
abbr --add nvim -- 'nvim --server $NVIM --remote'
```

Related issues/project:

- [neovim-remote](https://github.com/mhinz/neovim-remote)
- [Neovim#5155](https://github.com/neovim/neovim/issues/5155)
- [Neovim#5472](https://github.com/neovim/neovim/issues/5472)
