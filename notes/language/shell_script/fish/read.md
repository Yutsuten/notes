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
end < ~/.local/environment
```
