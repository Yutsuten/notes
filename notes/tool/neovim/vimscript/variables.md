---
title: Variables
---

## Namespaces

See help for `internal-variables` for more details.

| Syntax | Description |
| --- | --- |
| `myvar` | Local to a function, may conflict with other scopes. |
| `a:myarg` | Argument. |
| `b:myvar` | Local to buffer. |
| `w:myvar` | Local to window. |
| `s:myvar` | Local to script. |
| `l:myvar` | Local to function. |
| `g:myvar` | Global. |
| `&shiftwidth` | Global setting. |
| `$HOME` | Environment variable. |

## Set/unset variable

Create/change a variable with `let`.

```vim
let myvar = 'Hello'
```

Delete a variable with `unlet`.

```vim
unlet myvar
```

## Variable existence

Checks if the variable / function is defined.
Check the help for `exists` for more details.

```vim
echo exists('&setting')
echo exists('*function')
echo exists('varname')
```
