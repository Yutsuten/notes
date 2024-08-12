---
title: Operators
ref: https://doc.rust-lang.org/book/appendix-02-operators.html
---

## Arithmetic

| Operator | Description |
| --- | --- |
| `+` | Addition or unary plus |
| `-` | Subtraction or unary minus |
| `*` | Multiplication |
| `/` | Division |
| `%` | Remainder after division (modulo division) |

## Assignment

| Operator | Example | Same as |
| --- | --- | --- |
| `=` | `a = b` | `a = b` |
| `+=` | `a += b` | `a = a + b` |
| `-=` | `a -= b` | `a = a - b` |
| `*=` | `a *= b` | `a = a * b` |
| `/=` | `a /= b` | `a = a / b` |
| `%=` | `a %= b` | `a = a % b` |
| `&=` | `a %= b` | `a = a & b` |
| `\|=` | `a %= b` | `a = a \| b` |
| `^=` | `a %= b` | `a = a ^ b` |
| `<<=` | `a %= b` | `a = a << b` |
| `>>=` | `a %= b` | `a = a >> b` |

## Relational

| Operator | Description |
| --- | --- |
| `==` | Equal to |
| `!=` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

## Logical

| Operator | Description |
| --- | --- |
| `&&` | AND |
| `\|\|` | OR |
| `!` | NOT |

## Bitwise

| Operator | Description |
| --- | --- |
| `&` | AND |
| `\|` | OR |
| `^` | XOR |
| `~` | Complement |
| `<<` | Shift left |
| `>>` | Shift right |

## Ranges

| Operator | Example | Description |
| --- | --- | --- |
| `..` | `0 .. 10` | Right-exclusive range literal (from 0 to 9) |
| `..` | `0 ..= 10` | Right-inclusive range literal (from 0 to 10) |

May be used when destructuring or assigning while defining a valid range.

```rust
let grade @ 0 ..= 100 = user_input else {
    return;
};
if let WebEvent::KeyPress(mychar @ 'a' ..= 'z') = pressed {
    println!("Pressed a lower case character: '{}'", mychar);
}
```
