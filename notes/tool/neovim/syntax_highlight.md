---
title: Syntax highlight
---

## Change syntax highlight

```vim
set filetype=markdown
set syntax=markdown
```

## Modeline

Add the following to the beginning or end of a file, as a comment.

```vim
vim: filetype=neomuttrc
```

## Synchronize

If syntax highlight is broken, run:

```vim
syntax sync fromstart
```
