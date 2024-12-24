---
title: Path
ref: https://fishshell.com/docs/current/cmds/path.html
---

## Resolve

Returns the normalized, physical and absolute versions of all paths.

```fish
path resolve file.txt
```

## Normalize

Returns the normalized versions of all paths.

That means it squashes duplicate `/` (except for two leading `//`),
collapses `../` with earlier components and removes `.` components.

```fish
path normalize ./folder//file.txt  # Out: folder/file.txt
```

## Path without filename

```fish
path dirname folder/sub/file.txt  # Out: folder/sub
```
