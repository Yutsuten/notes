---
title: Macro
ref: https://doc.rust-lang.org/std/fmt/
---

## Print

You can also generate a string with the `format!` macro using the same syntax.

```rust
/* Sample main function */
fn main() {
    // Printing to STDIO
    print!("Print WITHOUT newline. ");
    println!("Print WITH newline appended.");
    // Printing to STDERR
    eprint!("Print to STDERR without newline. ");
    eprintln!("Print to STDERR with newline appended.");
    // Formatting string printed
    println!("My name is {}, I'm {} years old.", "Kai", 15);
    println!("My name is {0}, I'm {1} years old.", "Kai", 15);
    println!("My name is {name}, I'm {age} years old.", name="Kai", age=15);
    // Number formatting
    println!("Base {:>2} : {:b}", 2, 20);
    println!("Base {:>2} : {:o}", 8, 20);
    println!("Base {:>2} : {}", 10, 20);
    println!("Base {:>2} : {:x}", 16, 20);
    // Text formatting
    println!("'{:<15}'", "left");
    println!("'{:^15}'", "center");
    println!("'{:>15}'", "right");
    println!("'{:_<width$}'", "left", width=15);
    println!("'{:_^width$}'", "center", width=15);
    println!("'{:_>width$}'", "right", width=15);
    // Use variables in current scope
    let pi = 3.141592;
    println!("Pi is roughly {pi:.3}");
    // Using format!()
    let text = format!("Pi is roughly {pi:.3}", pi=pi);
    println!("{}", text);
}
```
