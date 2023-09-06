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

## String

```shell
myvar="value"
```

## Array

Creation:

```shell
names=('My name' 'Your name' 'Their name')
read -ra state < <(echo '1 2 3')  # From output
```

Access elements:

```shell
echo "${names[@]}"  # All elements
echo "${names[1]}"  # Index (start from 0)
```

Length:

```shell
echo "${#names[@]}"
```

## Advanced syntax

To lower case:

```shell
name="Sora"
echo "${name,,}"
```

Remove trailing character (slash):

```shell
SOME_DIR="some_dir/"
echo "${SOME_DIR%/}"
```
