---
title: Functions
ref: https://doc.rust-lang.org/book/ch03-03-how-functions-work.html
---

## Usage

Unlike C/C++, there's no restriction on the order of function definitions.

The return type is specified with `->`,
if it doesn't return anything (unit type `()`),
you can ommit it.

```rust
fn main() {
    let result = sum(2, 3);
    println!("Result is: {result}");
}

fn sum(a: u32, b: u32) -> u32 {
    return a + b;
}
```

The last expression is used as return value,
so we can omit the `return` and the last `;`.

```rust
fn sum(a: u32, b: u32) -> u32 {
    a + b
}
```
