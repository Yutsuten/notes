---
title: Uniq
man: uniq
---

## Usage

Report or omit repeated lines.

```shell
uniq OPTION INPUT OUTPUT
```

| Option                   | Description                                |
| ------------------------ | ------------------------------------------ |
| `-i` `--ignore-case`     | Ignore differences in case when comparing. |
| `-z` `--zero-terminated` | line delimiter is `NUL`, not newline.      |

## Example

Sort and remove repeated lines.
In this case using `sort -u` would be better, though.

```shell
sort input.txt | uniq
```
