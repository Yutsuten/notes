---
title: Rand
ref: https://rust-lang-nursery.github.io/rust-cookbook/algorithms/randomness.html
---

## Install

Generate random numbers.

```shell
cargo add rand
```

## Usage

Generate a random number within a range:

```rust
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    println!("Random number from 0 to 99: {}", rng.gen_range(0..100));
}
```
