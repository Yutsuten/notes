---
title: Status
ref: https://fishshell.com/docs/current/cmds/status.html
---

## Get script directory

If going to load resources in the same directory as the fish script,
get the script directory with:

```fish
status dirname
```

If the script is a symlink, the above will give the directory of the symlink.
To get the folder where the script is, use:

```fish
path dirname (status filename)
```
