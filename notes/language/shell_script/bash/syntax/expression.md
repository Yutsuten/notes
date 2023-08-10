---
title: Expression
---

## Logical

```shell
test expression
[[ expression ]]
[[ ! expression ]]
[[ expression ]] && [[ expression ]]
[[ expression ]] || [[ expression ]]
```

## File check

```shell
[[ -d dir/ ]]          # True if exists and is a directory
[[ -f dir/filename ]]  # True if exists and is a file
[[ -e dir/filename ]]  # True if path exists
```

## Integer comparison

```shell
[[ 12 -eq 10 ]]  # (( 12 == 10 ))
[[ 12 -ne 10 ]]  # (( 12 != 10 ))
[[ 12 -lt 10 ]]  # (( 12 < 10 ))
[[ 12 -gt 10 ]]  # (( 12 > 10 ))
[[ 12 -le 10 ]]  # (( 12 <= 10 ))
[[ 12 -ge 10 ]]  # (( 12 >= 10 ))
[[ ! (12 == 10) ]]
[[ (12 > 10) && (15 < 20) ]]
[[ (12 != 12) || (15 != 20) ]]
```

## String comparison

```shell
[[ '04:00' == '12:00' ]]
[[ '04:00' != '12:00' ]]
[[ '04:00' < '12:00' ]]
[[ '04:00' > '12:00' ]]
[[ -z "${MYVAR}" ]]  # Length is zero?
[[ -n "${MYVAR}" ]]  # Length is non-zero?
```

## Decimal comparison

```shell
(( $(echo '8.5==7' | bc -l) ))
(( $(echo '8.5!=7' | bc -l) ))
(( $(echo '8.5<7' | bc -l) ))
(( $(echo '8.5<=7' | bc -l) ))
(( $(echo '8.5>7' | bc -l) ))
(( $(echo '8.5>=7' | bc -l) ))
(( $(echo '!(8.5>7)' | bc -l) ))
(( $(echo '(8.5>7) && (8.5>9)' | bc -l) ))
(( $(echo '(8.5>7) || (8.5<9)' | bc -l) ))
```
