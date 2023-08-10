---
title: Pyls
ref: https://github.com/python-lsp/python-lsp-server
---

## Install

```shell
pip install python-lsp-server
pacman -S python-lsp-server
```

### Neovim configuration

```lua
require('lspconfig').pylsp.setup{
  settings = {pylsp = {configurationSources = {'flake8'}}}
}
```

### ALE Configuration

```vim
let g:ale_python_pyls_executable = 'python3'
let g:ale_python_pyls_options = '-m pyls'
let g:ale_python_pyls_config = {
\  'pyls': { 'configurationSources': ['flake8'] }
\}
```
