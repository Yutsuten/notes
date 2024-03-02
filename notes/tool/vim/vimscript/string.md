---
title: String
ref: https://learnvimscriptthehardway.stevelosh.com/chapters/27.html
---

## Basic usage

```vim
let mystr = 'somestring'
let mystr = 'concatenate ' .. 'strings'
let mystr = mystr[-10]
```

Split into a list using a separator:

```vim
let mylist = split(mystr)       " Space is used by default
let mylist = split(mystr, ',')
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

## Functions

```vim
echo len(mystr)
echo tolower('Foo')  " => 'foo'
echo toupper('Foo')  " => 'FOO'
```
