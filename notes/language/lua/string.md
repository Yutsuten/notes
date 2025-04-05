---
title: String
ref: https://www.lua.org/manual/5.4/manual.html#6.4
---

## String

```lua
name = "Hime"
concatenate = "Hello " .. "World"
```

## Functions

The `g` in some functions stands for *global*.

| Function | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| `format` | Format a string using the same rules as `sprintf`.                                 |
| `sub`    | Return a substring from `start` index to `end`. Negative values count from behind. |
| `gsub`   | Perform *replace* using a regex pattern.                                           |
| `match`  | Return a match using a regex pattern.                                              |
| `gmatch` | Return all matches using a regex pattern (`^` at the beginning doesn't work).      |
| `len`    | Return the length of the string.                                                   |
| `lower`  | Return a copy of the string in lowercase.                                          |
| `upper`  | Return a copy of the string in uppercase.                                          |

## Examples

Format a string:

```lua
formatting = string.format("Hello %s!", name)
```

Remove last character:

```lua
string.sub(my_str, 1, -2)
```

Remove the word `password` from a string:

```lua
string.gsub(my_str, "password", "")
```
