---
title: Function
ref: https://fishshell.com/docs/current/cmds/function.html
---

## Syntax

`$1` and the like does not exists.
Use the `$argv` list.

```fish
function greet
    echo Hello $argv
end

function greet --argument-names name
    echo Hello $name $argv[2]
end
```
