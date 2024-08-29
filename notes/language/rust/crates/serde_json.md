---
title: Serde JSON
ref: https://github.com/serde-rs/json
---

## Basic

```shell
cargo add serde_json
```

Operating on untyped JSON values using `v1.0.127`:

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

[Convert](https://docs.rs/serde_json/1.0.127/serde_json/value/enum.Value.html#implementations)
values into primitives:

```rust
let name = dict["name"].as_str().unwrap();
let number = dict["age"].as_i64().unwrap();  // Integer
let number = dict["age"].as_f64().unwrap();  // Float
```
