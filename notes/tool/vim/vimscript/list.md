---
title: List
ref: https://learnvimscriptthehardway.stevelosh.com/chapters/35.html
---

For more details, check the help for `List`.

## Basic usage

```vim
let mylist = [1, 'two', 3, 'four']
let numbers = range(5)  " => [0, 1, 2, 3, 4]"
mylist[1]
```

To generate a list filled with values:

```vim
let names = repeat([''], 5)  " => ['', '', '', '', '']"
```

## Operations

```vim
let mylist = ['a', 'b'] + ['c', 'd']  " => ['a', 'b', 'c', 'd']"

let val = get(mylist, 1, 'default')
let ind = index(mylist, 'value')  "Index of value or -1"

call add(mylist, 'e')         "Append 'e' value"
call insert(mylist, 'foo')    "Prepend 'foo' value"
call insert(mylist, 'z', 3)   "Insert at index 3"

call remove(mylist, 3)        "Remove index 3"
unlet mylist[3]               "Idem"
let val = remove(mylist, 3)   "Idem"

call reverse(mylist)          "Reverses the list in place"

let text = join(mylist)       "Space by default"
let text = join(mylist, ',')
```

### Slicing

```vim
echo numbers[1:3]  " => [1, 2, 3]"
echo numbers[:3]  " => [0, 1, 2, 3]"
echo numbers[1:]  " => [1, 2, 3, 4]"
```

## Functions

```vim
echo empty(list)
echo len(list)
echo max(list)
echo min(list)
```
