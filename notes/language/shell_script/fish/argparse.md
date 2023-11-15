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

if set -ql _flag_help
    echo 'Show help'
end
if set -ql _flag_name
    echo 'Show name'
end
```
