---
title: Fc
man: zshbuiltins
---

## Usage

`fc` stands for Fix Command.

```shell
fc OPTIONS FIRST LAST
```

| Option | Description |
| --- | --- |
| `-l` | Send the result to stdout. |
| `-i` | Add timestamp. |
| `-m` | Search for a pattern. |

## Example

Print all the history:

```shell
fc -l 1
```

Print commands that have a pattern:

```shell
fc -lm '*docker*'
```
