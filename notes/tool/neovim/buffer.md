---
title: Buffer
---

## Buffer navigation

| Command | Description |
| --- | --- |
| `ls` `buffers` | List current opened buffers. |
| `b` | Open buffer. Buffer number or file name can be used. |
| `bn` `bp` | Next or previous buffer. |
| `bd` | Delete buffer. Buffer number or file name can be used. |

### Tips

Close all buffers but current.

```vim
%bd | e #
```

Close buffer without closing window.

```vim
bp | bd #
```
