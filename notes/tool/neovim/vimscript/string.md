---
title: String
ref: https://learnvimscriptthehardway.stevelosh.com/chapters/27.html
nvim: str2float()
---

## Basic usage

```vim
let mystr = 'somestring'
let mystr = 'concatenate ' .. 'strings'
let char = mystr[-10]
```

## Functions

| Function | Description |
| --- | --- |
| `split(str, delimiter)` | Splits the string using a delimiter, which defaults to space. |
| `strlen(str)` | Returns the length of the string. |
| `tolower(str)` | Returns a copy with all characters turned into lower case. |
| `toupper(str)` | Returns a copy with all characters turned into upper case. |

Examples:

```vim
let mylist = split(mystr)       " Space is used by default
let mylist = split(mystr, ',')
let is_empty = !strlen(mystr)
```

## Comparison

By default, the comparison case-sensitiveness depends on user configuration.

Append `#` to make it case-sensitive,
or `?` to make it case-insensitive.

```vim
mystr ==# 'text'
mystr !=# 'text'
```

For regex, replace the second `=` with `~`:

```vim
mystr =~# '^t'  " Starts with t
mystr !~# '^t'  " Does not start with t
```
