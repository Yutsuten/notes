---
title: IO
ref: https://www.lua.org/manual/5.4/manual.html#6.8
---

## File manipulation

Loop a file line by line:

```lua
for line in io.lines(playlist_path) do
    print(line)
end
```

Read all contents of a file:

```lua
local file = io.open(path, "r")
if file then
    print(file:read("*all"))
    file:close()
else
    print("Failed to open file")
end
```

Write contents to a file:

```lua
local file = io.open(path, "w")
if file then
    file:write("Hello World!\n")
    file:close()
else
    print("Failed to open file")
end
```

## Run external program

Run a program using a shell and get stdout:

```lua
local cmd_handle = io.popen(shell_command)
local stdout = cmd_handle:read("*all")  -- Won't read stderr
cmd_handle:close()
```
