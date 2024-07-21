---
title: Enum
ref: https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html
---

## Syntax

Creating an `enum`:

```rust
enum Result {
    Success,
    InvalidInput,
    UnexpectedError,
}
```

Multiple types can be used (unlike C):

```rust
enum WebEvent {
    KeyPress(char),
    Paste(String),
    Click { x: i64, y: i64 },
}
```

Create an alias to rename an `enum`:

```rust
type Res = Result;
```

## Usage

To use it in the C way:

```rust
fn main() {
    let success = Result::Success;
    let invalid_input = Result::InvalidInput;
    let unexpected_error = Result::UnexpectedError;
    println!("{} {} {}", success as i32, invalid_input as i32, unexpected_error as i32);
}
```

To use it in the Rust way (it is like creating a switch-case):

```rust
fn debug_result(result: Result) {
    // Think of a switch-case structure
    match result {
        Result::Success => println!("Success"),
        Result::InvalidInput => {
            println!("Invalid Input");
        },
        Result::UnexpectedError => {
            println!("Unexpected Error");
        },
    }
}

fn main() {
    let success          = Result::Success;
    let invalid_input    = Result::InvalidInput;
    let unexpected_error = Result::UnexpectedError;

    debug_result(success);
    debug_result(invalid_input);
    debug_result(unexpected_error);
}
```

Rust way using not-integer types:

```rust
fn debug_webevent(event: WebEvent) {
    match event {
        WebEvent::KeyPress(c) => println!("pressed '{}'.", c),
        WebEvent::Paste(s) => println!("pasted \"{}\".", s),
        WebEvent::Click { x, y } => {
            println!("clicked at x={}, y={}.", x, y);
        },
    }
}

fn main() {
    let pressed = WebEvent::KeyPress('x');
    let pasted  = WebEvent::Paste("my text".to_owned());
    let click   = WebEvent::Click { x: 20, y: 80 };

    debug_webevent(pressed);
    debug_webevent(pasted);
    debug_webevent(click);
}
```

To make `enum` values become available without manual scoping (`Result::`) like in C,
use the `use` declaration:

```rust
fn main() {
    // Partial "import" with {Val1, Val2} or full "import" with *
    use crate::Result::{Success, InvalidInput, UnexpectedError};
    use crate::WebEvent::*;

    let success          = Success;
    let invalid_input    = InvalidInput;
    let unexpected_error = UnexpectedError;

    let pressed = KeyPress('x');
    let pasted  = Paste("my text".to_owned());
    let click   = Click { x: 20, y: 80 };
}
```
