---
title: Reqwest
ref: https://docs.rs/reqwest/latest/reqwest/index.html
---

## Install

Make HTTP requests.

```shell
cargo add -F blocking reqwest  # For blocking requests
```

## Blocking

Simple example using v0.12.7:

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let res = reqwest::blocking::get("https://ifconfig.me")?;
    println!("Status: {}", res.status());
    println!("Content:\n{}", res.text()?);
    Ok(())
}
```
