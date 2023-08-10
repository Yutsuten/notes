---
title: Function
---

## Definition

Add `!` after `function` to overwrite if it is already defined
(useful when reloading the script).

```vim
function! Simple(myarg)
  echo a:myarg
  return 0
endfunction

function! OptionalArgs(...)
  echo a:0  "Number of arguments"
  echo a:1  "Optional argument"
endfunction
```

## Usage

Use the `call` keyword to call the function.

```vim
call Simple(1)
```
