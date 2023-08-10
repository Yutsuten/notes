---
title: RegExp
---

## Usage

Assigning the regex into a variable seems to be important.

```shell
REGEXP='\{.+\} (\{.+\})'
if [[ ${INPUT} =~ ${REGEXP} ]]; then
  MATCH="${BASH_REMATCH[1]}"
fi
```
