---
title: Output redirect
---

## Write output to file

```shell
## Any command is valid, not only echo
echo 'Hello World' > new_file
echo 'Hello World' >> append_existing_file

## Check if content exist before inserting
CONTENT='Hello World'; FILE=~/.bashrc
grep -qF -- "${CONTENT}" "${FILE}" || echo "${CONTENT}" >> "${FILE}"
```

## Redirect stderr to stdout

```shell
command > new_file 2>&1
```
