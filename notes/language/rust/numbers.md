---
title: Numbers
ref: https://forkful.ai/en/rust/numbers/rounding-numbers/
---

## Methods

| Method  | Description                                       |
| ------- | ------------------------------------------------- |
| `round` | Round to nearest whole number.                    |
| `floor` | Largest integer less than or equal to number.     |
| `ceil`  | Smallest integer greater than or equal to number. |
| `trunc` | Integer part without fractional digits.           |

Example:

```rust
let pi = 3.141592;
let round_pi = pi.round();
```

## Update reference

If updating a number in a function that received it as `&mut`:

```rust
fn update_counter(&mut count) {
    *count += 1;
}
```
