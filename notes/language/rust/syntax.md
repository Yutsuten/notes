---
title: Syntax
ref: https://doc.rust-lang.org/std/fmt/
---

## Printing text

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

### Structures

To print structures, you can derive the `fmt::Debug` implementation.
Use the `{:?}` notation.

```rust
#[derive(Debug)]
struct Structure(i32);

#[derive(Debug)]
struct Person<'a> {
    name: &'a str,
    age: u8,
}

fn main() {
    println!("Value is {:?}", 12);
    println!("Structure value is {:?}", Structure(12));
    println!("Pretty-print value is {:#?}", Structure(12));

    let name = "Peter";
    let age = 27;
    let peter = Person { name, age };
    println!("{:#?}", peter);
}
```

Implementing custom display of structures.

```rust
use std::fmt;

#[derive(Debug)]
struct MinMax(i64, i64);

impl fmt::Display for MinMax {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "({}, {})", self.0, self.1)
    }
}

#[derive(Debug)]
struct Point2D {
    x: f64,
    y: f64,
}

impl fmt::Display for Point2D {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "x: {}, y: {}", self.x, self.y)
    }
}

fn main() {
    let minmax = MinMax(0, 14);
    println!("Compare structures:");
    println!("Display: {}", minmax);
    println!("Debug: {:?}", minmax);

    let point = Point2D { x: 3.3, y: 7.2 };
    println!("Compare points:");
    println!("Display: {}", point);
    println!("Debug: {:?}", point);
}
```

If multiple `write!()` are needed (such as an array),
you can use the `write!()?` to indicate that there are more.

```rust
use std::fmt;

struct List(Vec<i32>);

impl fmt::Display for List {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let vec = &self.0;
        write!(f, "[")?;
        for (count, v) in vec.iter().enumerate() {
            if count != 0 { write!(f, ", ")?; }
            write!(f, "{}", v)?;
        }
        write!(f, "]")
    }
}

fn main() {
    let v = List(vec![1, 2, 3]);
    println!("{}", v);
}
```
