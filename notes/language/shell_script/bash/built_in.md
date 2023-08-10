---
title: Built-in
---

## Set

```shell
## https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
set -e           # Exit on error
set -u           # Exit on undefined variables
set -o pipefail  # Throw error on command pipe failures
set -x           # Print the commands (-o xtrace)
```

## Random

```shell
echo $(( RANDOM % 10 ))
```
