---
title: Alacritty
---

## Change shell

The default shell is Powershell.

### Git Bash

Edit `%APPDATA%\alacritty\alacritty.yml` and put this:

```yaml
shell:
  program: C:\Program Files\Git\bin\bash.exe
```

This way *Open Alacritty here* will open Git Bash in the specified directory.

You can also create a shortcut to open WSL instead:

- **Target**: `"C:\Program Files\Alacritty\alacritty.exe" --command wsl zsh`
- **Start in**: `\\wsl.localhost\Ubuntu\home\mateus`

This will open WSL and start in the home directory.

### WSL

To use ZSH (from wsl) instead,
edit `%APPDATA%\alacritty\alacritty.yml` and put this:

```yaml
shell:
  program: wsl
  args:
    - zsh
```

If setup with a VcXsrv (no need to pop up any window),
clipboard support will be available.

### CMD

Edit `%APPDATA%\alacritty\alacritty.yml` and put this:

```yaml
shell:
  program: cmd
```

`cmd` with the Windows' `ssh` can be good,
with the only disvantage that there is no clipboard support.

## Fix TERM variable

[GitHub issue](https://github.com/alacritty/alacritty/issues/2711)

:::info
This "fix" is buggy and probably is better to leave the default.
:::

WSL defaults to `xterm-256color` without this configuration.

```yaml
env:
  TERM: alacritty
  WSLENV: TERM
```
