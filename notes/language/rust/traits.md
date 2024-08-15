---
title: Traits
ref: https://doc.rust-lang.org/book/ch10-02-traits.html
---

## Basic

Used to define shared behavior for implementations (`impl`).

For example, if we want an abstract `Currency` to implemented to different currency *types*,
we do something like:

```rust
struct JPY {
    value: i32,
}

trait Currency {
    // Interface
    fn cur_value(&self) -> i32;

    // Default implementation (can be overridden)
    fn print(&self) {
        println!("Current value is {}", self.cur_value());
    }
}

impl Currency for JPY {
    fn cur_value(&self) -> i32 {
        self.value
    }
}

fn main() {
    let jpy = JPY { value: 15_000 };
    jpy.print();
}
```
