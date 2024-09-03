---
title: Iterators
ref: https://doc.rust-lang.org/std/iter/trait.Iterator.html
---

## Basic

With iterators one can chain several operations into it,
and ultimately use `collect` to save the result as,
for example, a `Vec`.

```rust
let numbers = 1..=3;
let doubled: Vec<i32> = numbers.map(|num| num * 2).collect();
```
