---
title: Macro
ref: https://doc.rust-lang.org/std/fmt/
---

## Print

Available default macros for printing and formatting string:

| Macro | Description |
| --- | --- |
| `print!` | Prints to STDOUT without newline. |
| `println!` | Prints to STDOUT with newline. |
| `eprint!` | Prints to STDERR without newline. |
| `eprintln!` | Prints to STDERR with newline. |
| `format!` | Returns a formatted string. |

Usage:

```rust
println!("My name is {}, I'm {} years old.", "Kai", 15);
println!("My name is {0}, I'm {1} years old.", "Kai", 15);
println!("My name is {name}, I'm {age} years old.", name="Kai", age=15);
```

Text formatting:

```rust
println!("'{:<15}'", "left");
println!("'{:^15}'", "center");
println!("'{:>15}'", "right");
println!("'{:_<width$}'", "left", width=15);
println!("'{:_^width$}'", "center", width=15);
println!("'{:_>width$}'", "right", width=15);
```

Integer formatting:

```rust
println!("Base {:>2} : {:b}", 2, 20);
println!("Base {:>2} : {:o}", 8, 20);
println!("Base {:>2} : {}", 10, 20);
println!("Base {:>2} : {:x}", 16, 20);
```

Float formatting:

```rust
let pi = 3.141592;
println!("Pi is roughly {pi:.3}");
```
