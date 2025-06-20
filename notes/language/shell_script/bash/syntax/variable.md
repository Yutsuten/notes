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

```bash
myvar="value"
```

## Array

Creation:

```bash
names=('My name' 'Your name' 'Their name')
read -ra state < <(echo '1 2 3')  # From output
```

Access elements:

```bash
echo "${names[@]}"  # All elements
echo "${names[1]}"  # Index (start from 0)
```

Length:

```bash
echo "${#names[@]}"
```

## Advanced syntax

To lower case:

```bash
name="Sora"
echo "${name,,}"
```

Remove trailing character (slash):

```bash
SOME_DIR="some_dir/"
echo "${SOME_DIR%/}"
```
