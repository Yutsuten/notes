---
title: Expect
ref: https://github.com/hymkor/expect
---

## Example

```lua
local argument1 = arg[1]
local pass = "password"

if spawnctx("ssh", "server") then
  expect("password:")
  sendln(pass)
end
```

Run with:

```bat
expect sample arg1
```
