---
title: Lua
ref: https://www.lua.org/manual/
---

## Operators

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | equals                   |
| `~=`     | not equals               |
| `>`      | greater than             |
| `<`      | less than                |
| `>=`     | greater than or equal to |
| `<=`     | less than or equal to    |

## Table

Array and dictionary at the same time.

```lua
mylist = {'a', 'b', 'c'}
mylist_length = #mylist
is_empty = next(mylist) == nil
```

Insert value into table:

```lua
table.insert(mytable, "new element")
```

Use `pairs()` or `ipairs()` to loop it:

```lua
for index, value in pairs(mylist) do
    print(value)
end
```

## String

```lua
name = "Hime"
concatenate = "Hello " .. "World"
```

### Methods

| Method            | Description                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| `format()`        | Format a string using the same rules as `sprintf`.                                 |
| `sub(start, end)` | Return a substring from `start` index to `end`. Negative values count from behind. |

Format a string:

```lua
formatting = string.format("Hello %s!", name)
```

Remove last character:

```lua
string.sub(my_str, 1, -2)
```

## External commands

Run a program using a shell:

```lua
local cmd_handle = io.popen(shell_command)
local stdout = cmd_handle:read("*all")  -- Won't read stderr
cmd_handle:close()
```
