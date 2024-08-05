---
title: Functions
ref: https://doc.rust-lang.org/book/ch03-03-how-functions-work.html
---

## Syntax

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

### Closures

Useful to create inline functions (like `lambda` in python).
It is possible to use variables in the same scope.

```rust
fn main() {
    let year = 2024;
    let add_year = |i| year + i;
    println!("Next year: {}", add_year(1));
}
```

One may also annotate and run multiple statements:

```rust
fn main() {
    let money = 20;
    let buy_by = |expense: i32| -> () {
        if money - expense >= 0 {
            println!("I still have money");
        } else {
            println!("I don't have enough money");
        }
    };
    buy_by(25);
    buy_by(15);
}
```
