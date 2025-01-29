---
title: Operators
---

## Arithmetic

| Operator | Description                                |
| -------- | ------------------------------------------ |
| `+`      | Addition or unary plus                     |
| `-`      | Subtraction or unary minus                 |
| `*`      | Multiplication                             |
| `/`      | Division                                   |
| `%`      | Remainder after division (modulo division) |
| `**`     | Exponentiation                             |

## Assignment

| Operator | Example     | Same as                               |
| -------- | ----------- | ------------------------------------- |
| `=`      | `a = b`     | `a = b`                               |
| `+=`     | `a += b`    | `a = a + b`                           |
| `-=`     | `a -= b`    | `a = a - b`                           |
| `*=`     | `a *= b`    | `a = a * b`                           |
| `/=`     | `a /= b`    | `a = a / b`                           |
| `\|\|=`  | `a \|\|= b` | `a = b if a == nil or a == false`     |
| `\|\|=`  | `a \|\|= b` | `a = b unless a == nil or a == false` |

## Relational

| Operator | Description                       |
| -------- | --------------------------------- |
| `==`     | Equal to                          |
| `!=`     | Not equal to                      |
| `>`      | Greater than                      |
| `<`      | Less than                         |
| `>=`     | Greater than or equal to          |
| `<=`     | Less than or equal to             |
| `<=>`    | Less, equal or greater (-1, 0, 1) |

## Logical

| Operator      | Description |
| ------------- | ----------- |
| `&&` `and`    | AND         |
| `\|\|` `or`   | OR          |
| `!`           | NOT         |

## Bitwise

| Operator | Description |
| -------- | ----------- |
| `&`      | AND         |
| `\|`     | OR          |
| `^`      | XOR         |
| `<<`     | Shift left  |
| `>>`     | Shift right |
