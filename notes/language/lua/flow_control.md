---
title: Flow control
ref: https://www.lua.org/manual/5.4/manual.html#3.3.4
---

## Condition

```lua
if expression then
    -- do something
elseif expression then
    -- do something
else
    -- do something
end
```

## For loop

Numerical

```lua
for value = 1, 10 do
    print(value) -- Print values from 1 to 10
end
for value = 10, 1, -1 do
    print(value) -- Print values from 10 to 1
end
```

Using iterators

```lua
for index, value in pairs(mylist) do
    print(index, value) -- Print indexes and values of a list
end
```

## While loop

```lua
while expression do
    -- do something
end
```

## Repeat until loop

```lua
repeat
    -- do something
until expression
```
