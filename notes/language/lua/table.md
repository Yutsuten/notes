---
title: Table
ref: https://www.lua.org/manual/5.4/manual.html#6.6
---

## Basic

Table is a mix of list and hashmap.

```lua
mylist = {'a', 'b', 'c'}
mylist_length = #mylist
is_empty = next(mylist) == nil
```

## Functions

| Function | Description |
| -------- | ----------- |
| `insert` | Insert an element at the specified position (defaults to last). |
| `remove` | Remove an element at the specified position (defaults to last). |
| `concat` | Flattens the list into a string (like `join` in other languages). |
| `sort` | Sort a list with an optional function. |
| `move` | Move elements from a table to another. |
| `pack` | Return a copy of the given table as list (indexed with numbers). |
| `unpack` | Return elements of list as different variables. |

## Examples

Insert value into table:

```lua
table.insert(mytable, "new element")
```

Use `pairs()` or `ipairs()` to loop it:

```lua
for index, value in pairs(mylist) do
    print(index, value)
end
```
