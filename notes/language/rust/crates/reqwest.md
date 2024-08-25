---
title: Reqwest
ref: https://docs.rs/reqwest/latest/reqwest/index.html
---

## Blocking

The simplest way to make a request is by making a blocking request.

```shell
cargo add -F blocking reqwest
```

Simple example using `v0.12.7`:

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let res = reqwest::blocking::get("https://ifconfig.me")?;
    println!("Status: {}", res.status());
    println!("Content:\n{}", res.text()?);
    Ok(())
}
```
