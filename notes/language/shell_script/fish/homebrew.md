---
title: Homebrew
---

## PATH

Add the following into `~/.config/fish/conf.d/linuxbrew.fish` to add `brew` binaries into your `PATH`.

```fish
if status is-interactive
  eval (/home/linuxbrew/.linuxbrew/bin/brew shellenv)
end
```
