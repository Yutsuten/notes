---
title: Path
ref: https://fishshell.com/docs/current/cmds/path.html
---

## Normalize

Returns the normalized versions of all paths.

That means it squashes duplicate `/` (except for two leading `//`),
collapses `../` with earlier components and removes `.` components.

```fish
path normalize "./folder//file.txt"  # Out: folder/file.txt
```

## Path without filename

```fish
path dirname folder/sub/file.txt  # Out: folder/sub
```
