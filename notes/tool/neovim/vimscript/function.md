---
title: Function
nvim: userfunc.txt
---

## Definition

Use `...` for optional arguments.

```vim
function SimpleFunc(myarg)
  echo a:myarg
  return 0
endfunction

function! OptionalArgs(...)
  echo a:0    " Number of arguments
  echo a:1    " Optional argument
  echo a:000  " List with all arguments
endfunction
```

Add `abort` after function name to stop as soon as an error is detected,
like most programming languages (recommended).

```vim
function SimpleFunc(myarg) abort
  echo a:myarg
  return 0
endfunction
```

## Usage

Use the `call` keyword to call the function.

```vim
call Simple(1)
```

## Reference

To get a `funcref` variable (to use in callbacks),
use `function()` or `funcref()`.

```vim
let no_update_on_reload = function('callback', [args])
let update_on_reload = funcref('callback', [args])
```
