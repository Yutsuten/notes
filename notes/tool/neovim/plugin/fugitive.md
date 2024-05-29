---
title: Fugitive
ref: https://github.com/tpope/vim-fugitive
---

## Git status

```shell
:G
:Gtabedit :  # new tab

s   # stage file under cursor
u   # unstage file under cursor
cc  # commit
ca  # commit --amend
dd  # add --patch (file under cursor)
dp  # put (while patching)
do  # obtain (while patching)
```

## Add patch

With the cursor on the file with changes.

```shell
:Gdiffsplit  # use Vim's diff handling capabilities to stage
:Gsplit      # open file in index to stage diffs

:Git add %   # add current file to staged
```

## Grep

Quickfix commands may be used to navigate between matches.

```shell
:Ggrep keyword  # It uses something similar to :vimgrep
```
