---
title: String
ref: https://doc.rust-lang.org/std/string/struct.String.html
---

## Constructor

There is the `str` (sequence of chars) and the `String` type.

```rust
let mystr = "Hello World";
let string_type1 = String::from(mystr);
let string_type2 = mystr.to_string();
```

### Split

[Split by lines](https://doc.rust-lang.org/std/primitive.str.html#method.lines):

```rust
for line in file_contents.lines() {
    println("{}", line);
}
```

[Split by a character](https://doc.rust-lang.org/std/primitive.str.html#method.split)
and [collect](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.collect)
into a collection (array):

```rust
let key_value: Vec<&str> = line.split('=').collect();
```

### Convert to number

```rust
let parsed: i32 = "5".parse().unwrap();
let turbo_parsed = "10".parse::<i32>().unwrap();
```
