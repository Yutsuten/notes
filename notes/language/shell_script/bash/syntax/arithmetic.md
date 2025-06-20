---
title: Arithmetic
ref: https://wiki.bash-hackers.org/syntax/arith_expr
---

Those expressions are evaluated to a number.

## Integer

```bash
$(( 5+2 ))
$(( 5-2 ))
$(( 5*2 ))
$(( 5/2 ))
$(( 5%2 ))
$(( 5**2 ))

(( count+=1 ))
```

## Decimal

Package `bc` is required.

```bash
'10.5+2.5' | bc -l
'10.5-2.5' | bc -l
'10.5*2.5' | bc -l
'10.5/2.5' | bc -l
'10.5^2.5' | bc -l
'sqrt(10.5)' | bc -l
```
