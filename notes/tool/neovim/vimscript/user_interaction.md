---
title: User interaction
---

## Ask for input

```vim
let default_value = 'default'
call inputsave()
let opts = {
      \ 'prompt': 'Choose a name: ',
      \ 'default': default_value,
      \ 'cancelreturn': default_value,
      \ }
let name = input(opts)
call inputrestore()
```

## Print text

| Function | Description |
| --- | --- |
| `printf(' %s ', myvar)` | Print formatted string. |
