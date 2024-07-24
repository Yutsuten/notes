---
title: Tuple
ref: https://doc.rust-lang.org/rust-by-example/primitives/tuples.html
---

## Syntax

A tuple can contain different types.
One value literal tuple needs a trailing comma.

Access its values with `tuple.0`, `tuple.1` etc.

```rust
let one_value    = (10,);
let simple_tuple = (10, "Hello", true);
let hello        = simple_tuple.1;
```

## Usage

Destructure into simpler types:

```rust
let (a, b, c) = simple_tuple;
println!("First: {}, Second: {}, Third: {}", a, b, c);
```

## Printing

```rust
let one_value    = (10,);
let simple_tuple = (10, "Hello", true);

println!("Debug: {:?}", one_value);
println!("Debug: {:?}", simple_tuple);  // Max 12 elements can be printed
println!("First: {}, Second: {}, Third: {}", simple_tuple.0, simple_tuple.1, simple_tuple.2);
```
