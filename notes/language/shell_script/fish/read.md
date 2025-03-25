---
title: Read
ref: https://fishshell.com/docs/current/cmds/read.html
---

## Usage

:::info NOTE
Using both `--line` and `--list` at the same time seems to not work.
:::

Read file line by line in loop:

```fish
while read --line keyvalue
  export $keyvalue
end <~/.local/environment
```

Read the output of a command line by line:

```fish
cmd | while read --line line
    echo $line
end
```

Read input from the user using a customized prompt:

```fish
read --prompt-str 'Are you sure? [y/N] '
```
