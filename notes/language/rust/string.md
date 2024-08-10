---
title: String
ref: https://doc.rust-lang.org/book/ch08-02-strings.html#what-is-a-string
---

## Constructor

There is the `str` (sequence of chars) and the `String` type.

```rust
let mystr = "Hello World";
let string_type1 = String::from(mystr);
let string_type2 = mystr.to_string();
```

## Convert string into number

```rust
let parsed: i32 = "5".parse().unwrap();
let turbo_parsed = "10".parse::<i32>().unwrap();
```
