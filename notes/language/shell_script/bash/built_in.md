---
title: Built-in
---

## Set

```bash
## https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
set -e           # Exit on error
set -u           # Exit on undefined variables
set -o pipefail  # Throw error on command pipe failures
set -x           # Print the commands (-o xtrace)
```

## Read

Read a value interactively and output its value to stdout:

```bash
sleep "$(read -p 'Time: ' time && echo $time)"
```

## Random

```bash
echo $(( RANDOM % 10 ))
```
