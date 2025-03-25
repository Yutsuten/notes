---
title: Isatty
ref: https://fishshell.com/docs/current/cmds/isatty.html
---

## Usage

Tests if a file descriptor is a terminal.

```fish
if isatty stdout
    echo 'Output is going to a terminal'
else
    echo 'Output is being piped'
end
```
