---
title: Variable
---

## Builtin

| Variable | Description |
| --- | --- |
| `$?` | Return code of last command. |
| `$#` | Number of arguments. |
| `$@` | All Arguments. |
| `$1` | Argument 1 (usable: 0-9). |

## Array

```shell
names=('My name' 'Your name' 'Their name')
read -ra state < <(echo '1 2 3')  # From output
```

## Usage

Single value:

```shell
MYVAR="value"
```

Array:

```shell
length=${#names[@]}
me=${names[0]}
```

### Remove trailing character

Remove trailing slash:

```shell
SOME_DIR="some_dir/"
echo "${SOME_DIR%/}"
```
