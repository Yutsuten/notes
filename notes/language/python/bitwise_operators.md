---
title: Bitwise operators
---

```python
## Base 2 numbers
0b0110
bin(5)

## Right shift (May be used to divide by multiples of 2, remainder discarded)
5 >> 1

## Left shift (May be used to multiply by multiples of 2)
5 << 1

## Bitwise AND (May be used as a bit mask)
8 & 5
num = 0b1100
mask = 0b0100
if (num & mask > 0):
  print('Bit was on')

## Bitwise OR (May be used to turn on a bit)
9 | 4
num = 0b1100
mask = 0b0001
num | mask # 0b1101

## Bitwise XOR (May be used to flip a bit)
12 ^ 42

## Bitwise NOT (Flip all bits)
~88
```
