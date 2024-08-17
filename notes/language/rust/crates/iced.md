---
title: Iced
ref: https://book.iced.rs/first-steps.html
---

## Basic

A very simple example of a working GUI application
(using the unreleased v0.13.0 as for 2024/08/17):

`Cargo.toml`

```toml
[package]
name = "sample"
version = "0.1.0"
edition = "2021"

[dependencies]
iced = { git = "https://github.com/iced-rs/iced.git" } # "0.13.0"
```

`src/main.rs`

```rust
use iced::widget::{button, column, text, Column};

#[derive(Default)]
struct Counter {
    value: i64,
}

#[derive(Debug, Clone)]
enum Message {
    Increment,
    Decrement,
}

impl Counter {
    fn view(&self) -> Column<Message> {
        column![
            button("+").on_press(Message::Increment),
            text(self.value),
            button("-").on_press(Message::Decrement),
        ]
    }

    fn update(&mut self, message: Message) {
        match message {
            Message::Increment => {
                self.value += 1;
            }
            Message::Decrement => {
                self.value -= 1;
            }
        }
    }
}

pub fn main() -> iced::Result {
    iced::run("A cool counter", Counter::update, Counter::view)
}
```
