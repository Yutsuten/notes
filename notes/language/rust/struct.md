---
title: Struct
ref: https://doc.rust-lang.org/book/ch05-01-defining-structs.html
---

## Syntax

Classic C struct:

```rust
struct Person {
    name: String,
    age: u8,
}

// Nesting
struct Company {
    ceo: Person,
    profit: u64,
}
```

Tuple struct:

```rust
struct MinMax(i64, i64);
```

Unit struct:

```rust
struct Unit;

fn main() {
    const myunit = Unit;  // What is it used for?
}
```

## Usage

Instantiate a struct using the values of another struct as base:

```rust
#[derive(Debug)]
struct Point {
    x: u8,
    y: u8,
}

fn main() {
    let first_point = Point { x: 10, y: 5 };
    let second_point = Point { x: 20, ..first_point };  // ..first_point MUST be the last
    println!("first_point: {:?}", first_point);
    println!("second_point: {:?}", second_point);
}
```

Destructure into simpler types:

```rust
fn main() {
    // Classic C struct
    let point = Point { x: 10, y: 5 };
    let Point { x: x_value, y: y_value } = point;
    println!("x: {}, y: {}", x_value, y_value);

    // Tuple struct
    let minmax = MinMax(0, 100);
    let MinMax(min, max) = minmax;
    println!("min: {}, max: {}", min, max);
}
```

### Default

Automatically generate defaults for a `struct`:

```rust
#[derive(Default)]
struct Point {
    x: u8,
    y: u8,
}
```

Or create your own defaults by implementing the [default](https://doc.rust-lang.org/std/default/trait.Default.html)
`trait`.

Then initialize with defaults:

```rust
let point = Point::default();
```

## Printing

To print structures, you can derive the `fmt::Debug` implementation.
Use the `{:?}` notation.

```rust
#[derive(Debug)]
struct Person<'a> {
    name: &'a str,
    age: u8,
}

#[derive(Debug)]
struct Structure(i32);

fn main() {
    let name = "Peter";
    let age = 27;
    let peter = Person { name, age };
    println!("Person: {:?}", peter);
    println!("Pretty-print: {:#?}", peter);

    let mystruct = Structure(12);
    println!("Structure: {:?}", mystruct);
    println!("Pretty-print: {:#?}", mystruct);
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

fn main() {
    let minmax = MinMax(0, 14);
    let minmax_str = minmax.to_string();
    println!("Compare structures:");
    println!("Display minmax: {}", minmax);
    println!("Display minmax_str: {}", minmax_str);
    println!("Debug minmax: {:?}", minmax);
}
```

If multiple `write!()` are needed (such as for an array),
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
