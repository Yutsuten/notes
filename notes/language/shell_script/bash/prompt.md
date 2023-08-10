---
title: Prompt
---

## Escape sequences

- `\e[x;ym` : Start color scheme. (x;y) is color pair to use
- `\e[m` : Stop color scheme.
- `\n` : New line.
- `\D{%H:%M:%S}` : Current date (syntax is the same as the `date` command).

### Examples

Coloured prompt:

```shell
PS1="\e[0;34m[\u@\h \W]\$\e[m "
```

Prompt with date-time and full current directory:

```shell
PS1="[\D{%Y-%m-%d %H:%M:%S} \u@\h \w]\$ "
```
