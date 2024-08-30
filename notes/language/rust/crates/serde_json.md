---
title: Serde JSON
ref: https://docs.rs/serde_json/latest/serde_json/enum.Value.html
---

## Untyped JSON

```shell
cargo add serde_json
```

Instantiate a JSON:

```rust
let data = serde_json::json!({
    "name": "John Doe",
    "age": 43,
});
```

### Parse

Operating on untyped JSON values:

```rust
use serde_json::Value;

fn main() {
    let raw_json = r#"
        {
            "name": "John Doe",
            "age": 43
        }"#;
    let data: Value = match serde_json::from_str(&raw_json) {
        Ok(result) => result,
        Err(_) => panic!("Could not parse JSON"),
    };
    println!("Name is {}, age is {}.", data["name"], data["age"])
}
```

[Convert](https://docs.rs/serde_json/1.0.127/serde_json/value/enum.Value.html#implementations)
values into primitives:

```rust
let name = data["name"].as_str().unwrap();
let number = data["age"].as_i64().unwrap();  // Integer
let number = data["age"].as_f64().unwrap();  // Float
```

### Stringify

Convert a JSON type into a string.

```rust
let raw_json = serde_json::to_string(&data).unwrap();
```
