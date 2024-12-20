---
title: IO
ref: https://www.lua.org/manual/5.4/manual.html#6.8
---

## Popen

Run a program using a shell and get stdout:

```lua
local cmd_handle = io.popen(shell_command)
local stdout = cmd_handle:read("*all")  -- Won't read stderr
cmd_handle:close()
```
