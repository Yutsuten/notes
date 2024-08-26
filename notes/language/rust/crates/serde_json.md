---
title: Serde JSON
ref: https://github.com/serde-rs/json
---

## Basic

Operating on untyped JSON values:

`Cargo.toml`

```toml
[package]
name = "training"
version = "0.1.0"
edition = "2021"

[dependencies]
serde_json = "1.0.127"
```

`src/main.rs`

```rust
use serde_json::Value;

fn main() {
    let data = r#"
        {
            "name": "John Doe",
            "age": 43
        }"#;
    let dict: Value = match serde_json::from_str(&data) {
        Ok(result) => result,
        Err(_) => panic!("Could not parse JSON"),
    };
    println!("Name is {}, age is {}.", dict["name"], dict["age"])
}
```
