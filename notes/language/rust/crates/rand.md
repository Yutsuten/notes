---
title: Rand
ref: https://rust-lang-nursery.github.io/rust-cookbook/algorithms/randomness.html
---

## Usage

Utilities to generate random numbers in Rust.

```shell
cargo add rand
```

Generate a random number within a range:

```rust
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    println!("Random number from 0 to 99: {}", rng.gen_range(0..100));
}
```
