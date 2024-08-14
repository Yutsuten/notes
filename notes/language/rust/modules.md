---
title: Modules
ref: https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html
---

## Basic

Modules are used to split your code so it is easier to manage.
Modules can be created inline and in separated files.

The inline module creation uses the `mod` keyword.

```rust
mod hello {
    pub fn greet() {
        println!("Hello World!");
    }
}

fn main() {
    hello::greet();
}
```

When creating in a separated file,
create like this `hello.rs` example:

```rust
pub fn greet() {
    println!("Hello World!");
}
```

Then on `main.rs`:

```rust
mod hello;

fn main() {
    hello::greet();
}
```

You can nest modules inline,
and put modules inside directories.
Both work the same way.

The `use` keyword to avoid typing the full path:

```rust
mod hello;
use hello::greet;

fn main() {
    greet();
}
```

Stuff created inside modules are *private* by default.
Use `pub` to make it *public*.

## Access parent and self

Use `super` to access the parent scope.
Use `self` to access the current scope.

Used to avoid writing the full path everytime for these common use cases.

```rust
pub fn greet() {
    println!("Nice to meet you!");
}

pub mod team {
    pub fn myself() {
        println!("I am Yutsuten.");
        self::friend();
        super::greet();
    }

    pub fn friend() {
        println!("My friend is right there.")
    }
}
```
