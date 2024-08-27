---
title: Std
ref: https://doc.rust-lang.org/std/index.html
---

## Environment variable

Read an environment variable.

```rust
use std::env;

fn main() {
    let home = env::var("HOME").unwrap();
    println!("{}", home);
}
```

## System Time

Get the current time since `UNIX_EPOCH` in seconds.

```rust
use std::time::SystemTime;

fn main() {
    let timestamp = SystemTime::now().duration_since(SystemTime::UNIX_EPOCH).unwrap();
    println!("{}", timestamp.as_secs());
}
```
