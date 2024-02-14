---
title: Printf
man: printf
---

## Text align

Formatting is the same as in C printf.

Align example:

```shell
printf '|%-20s|\n' 'left align'
printf '|%20s|\n' 'right align'
```

Number with zeros on the left example:

```shell
printf '%02d\n' 5
```

## Color RGB to HEX converter

`%x` or `%X`: An unsigned hexadecimal integer

```shell
printf '#%x%x%x' 232 93 93
```

## Misc

List files in directory separated with `\0`:

```shell
printf '%s\0' *
```
