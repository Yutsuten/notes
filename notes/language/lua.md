---
title: Lua
---

## Array

```lua
mylist = {'a', 'b', 'c'}
mylist_length = #mylist
is_empty = next(mylist) == nil
```

Use `pairs()` to loop an array (table):

```lua
for index, value in pairs(mylist) do
    print(value)
end
```

## String

```lua
name = "Hime"
concatenate = "Hello " .. "World"
formatting = string.format("Hello %s!", name)
```
