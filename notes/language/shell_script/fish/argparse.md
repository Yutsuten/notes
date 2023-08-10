---
title: Argparse
ref: https://fishshell.com/docs/current/cmds/argparse.html
---

## Syntax

```fish
argparse OPTIONS OPTION_SPEC -- $argv
```

## Example

Parse `-h` and `-n` as boolean:

```fish
argparse 'h/help' 'n/name' -- $argv
or return

if test $_flag_h  # Variable is -h if set
    echo 'Show help'
end
if test $_flag_n  # Variable is -n if set
    echo 'Show name'
end
```
