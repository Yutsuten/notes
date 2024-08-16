---
title: Std
ref: https://doc.rust-lang.org/std/index.html
---

## Environment variables

Read an environment variable or panic.

```rust
let home = std::env::var("HOME").unwrap();
```
