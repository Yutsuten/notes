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
| `max`   | Highest number.                                   |
| `min`   | Lowest number.                                    |

Example:

```rust
let pi = 3.141592;
let round_pi = pi.round();
```

Between two floats `a` and `b`,
return the highest or lowest:

```rust
a.max(b) // f32::max(a, b)
a.min(b) // f32::min(a, b)
```

## Update reference

If updating a number in a function that received it as `&mut`:

```rust
fn update_counter(&mut count) {
    *count += 1;
}
```
