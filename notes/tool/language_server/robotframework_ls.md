---
title: Robotframework ls
ref: https://pypi.org/project/robotframework-lsp/
---

## Configuration

```shell
pip install robotframework-lsp
```

### Neovim

`~/.local/share/nvim/site/plugin/lspconfig.lua`

```lua
require('lspconfig').robotframework_ls.setup{
  settings = {
    robot = {
      lint = {robocop = {enabled = true}},
      variables = {execdir = os.getenv('PWD')},
    },
  }
}
```

### Helix

In the project root, create `.helix/languages.toml`.

```toml
[language-server.robotframework_ls.config.robot]
lint.robocop.enabled = true
variables.execdir = "PWD_OUTPUT"
```
