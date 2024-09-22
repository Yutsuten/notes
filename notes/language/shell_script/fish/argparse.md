---
title: Argparse
ref: https://fishshell.com/docs/current/cmds/argparse.html
---

## Syntax

```fish
argparse OPTIONS OPTION_SPEC -- $argv
```

## Example

Parse `-h` `-n` as boolean:

```fish
argparse h/help n/name -- $argv
or return

if set --query _flag_help
    echo 'Show help'
end
if set --query _flag_name
    echo 'Show name'
end
```

Long options with `-` are accessed with `_`:

```fish
argparse wait-and-exit -- $argv
or return

if set --query _flag_wait_and_exit
    echo 'Wait and Exit'
end
```
