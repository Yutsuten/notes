---
title: Loop
---

## While syntax

```bash
while condition; do
  do_domething
done
```

## For syntax

```bash
for i in {1..10}; do
  echo $i
done

for MYVAR in val1 val2 val3; do
  echo $MYVAR
done

for path in folder/*/; do
  echo ${path}
  echo ${path%?}  # Remove last character
done
```

### Examples

Loop until user signal:

```bash
terminate=0
trap abort SIGUSR1

abort() {
  echo "Program has been aborted."
  terminate=1
}

while [[ terminate -eq 0 ]]; do
  stuff
done
```

Loop a variable using newline as separator.

```bash
while IFS='' read -r line || [[ -n "${line}" ]]; do
  echo $line
done <<< "${message}"
```

Loop a variable using `;` as separator (using `IFS=''` may add newline to the last variable).

```bash
while read -rd ';' i || [[ -n "${i}" ]]; do
  echo "Value $i"
done <<< "1;2;3"
```
