---
title: Shell
---

## Start interactive shell

On vim run `:sh`.

### Terminal mode

Only available on neovim.

- `:terminal` or `:e term://zsh` to open the terminal.
- Entering on Insert mode with `a` or `i` puts you in Terminal mode. You can type commands in this mode.
- `Ctrl+\` `Ctrl+n` to go back to Normal mode.

To clean the buffer:

- Set to 0 (clear): `set scrollback=0`
- Set to 2000: `set scrollback=2000`
- Then run `reset` on terminal to clean the screen

## Run single command

```shell
:!git status  # Bang!
```
