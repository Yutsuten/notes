---
title: Awk
---

## Usage

```shell
awk OPTIONS PROGRAM_TEXT
```

## Examples

Calculate the average of some numbers in a column (new line separated).

```shell
echo -e '4\n5' | awk '{ sum += $1 } END { printf "%.2f\n", sum/NR }'
```

Calculate the average of some numbers in a row (space separated).

```shell
echo '4 5' | awk '{ sum = 0; for (i = 1; i <= NF; i++) { sum += $i } printf "%.2f\n", sum/NF }'
```
