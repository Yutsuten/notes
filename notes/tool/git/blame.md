---
title: Blame
---

## Usage

Show the last commit that affects each line of a file.

```shell
git blame path/file.txt
```

Only shows data of a specific line range.

```shell
git blame path/file.txt -L 1,20
git blame path/file.txt -L 5,+5
```
