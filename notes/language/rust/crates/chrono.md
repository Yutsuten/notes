---
title: Chrono
ref: https://docs.rs/chrono/latest/chrono/index.html
---

## Install

Perform operations on dates and times.

```shell
cargo add chrono
```

## Usage

Print current datetime in an arbitrary format:

```rust
use chrono::prelude::*;

fn main() {
    let now = Local::now();
    println!("{}", now.format("%Y-%m-%d %H:%M:%S"));
}
```
