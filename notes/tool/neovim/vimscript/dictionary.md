---
title: Dictionary
ref: https://learnvimscriptthehardway.stevelosh.com/chapters/37.html
---

For more details, check the help for `Dictionary`.

## Basic usage

Use `\` to split it into multiple lines.

```vim
let mydict = {
\ 'key1': 'value1',
\ 'key2': 'value2',
\ }
let mydict['key3'] = 'value3'
let mydict.key4 = 'value4'
```

## Operations

```vim
let key1 = get(mydict, 'key1', 'default')

call remove(mydict, 'key1')        "Remove key1"
unlet mydict.key2                  "Idem"
let key3 = remove(mydict, 'key3')  "Idem"
```

## Functions

```vim
echo has_key(mydict, 'key3')
echo keys(mydict)
echo values(mydict)
```
