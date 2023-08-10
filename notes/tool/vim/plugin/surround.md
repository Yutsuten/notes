---
title: Surround
ref: https://github.com/tpope/vim-surround
---

```txt
## Add surround
ysiw'     # Add ' to word (iw is a selector)
ysiw)     # Add () to word, use ( to add spaces
ysiw<em>  # Add tag em to word
yss)      # Add () to line

## Change
cs"'      # Change " to '
cs'<q>    # Change ' to <q></q>
cst"      # Change <q></q> to "
cs"}      # Change " to {}

## Delete
ds"       # Delete "

## Visual mode
S"        # Surround with double quotes

## Multiple lines: Visual mode with capital V
Hello world!
 ↓
Command: S<p class="important">
 ↓
<p class="important">
  Hello world!
</p>
```
