---
title: File
man: file
---

## Usage

```shell
file OPTIONS
```

| Option | Description |
| --- | --- |
| `-b` `--brief` | Do not prepend filenames to output lines. |
| `-i` `--mime` | Print the mimetype and charset of the file. |
| `--mime-type` | Print the mimetype of the file. |

Print only the mimetype of a file:

```shell
file --mime-type --brief FILE
```
