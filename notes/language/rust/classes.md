---
title: Classes
ref: https://doc.rust-lang.org/book/ch05-03-method-syntax.html
---

## Usage

Classes in rust are under the name of *associated functions* and *methods*.

- **Classes:** Created with the `impl` keyword, using the same name of the type to associate with
- **Associated function:** Constructors, takes no `self` and returns an instance of the type
- **Methods:** Takes `self` and may access and modify the instance

```rust
struct Point {
    x: f64,
    y: f64,
}

impl Point {
    // Associated function (Class constructors), there is no self
    fn origin() -> Point {
        Point { x: 0.0, y: 0.0 }
    }

    fn new(x: f64, y: f64) -> Point {
        Point { x: x, y: y }
    }

    // Method (Class method), there is self (reference to the Class instance)
    // `&self` = `self: &Self`
    fn debug(&self) {
        println!("Point({}, {})", self.x, self.y);
    }

    // `&mut self` = `self: &mut Self`
    fn translate(&mut self, x: f64, y: f64) {
        self.x += x;
        self.y += y;
    }

    // Destroyer: it consumes the resources of the caller object
    // `self` = `self: Self`
    fn destroy(self) {
        let Point { x, y } = self;
        println!("Detroying Point({x}, {y})");
    }
}

fn main() {
    let origin = Point::origin();
    let mut point = Point::new(3.0, 4.0);
    origin.debug();
    point.debug();
    point.translate(2.0, 1.0);
    point.debug();
    point.destroy();
}
```

### Destructor

A custom destructor can be defined using the `Drop` trait.

```rust
struct ToDrop;

impl Drop for ToDrop {
    fn drop(&mut self) {
        println!("ToDrop is being dropped");
    }
}

fn main() {
    let x = ToDrop;
    println!("Made a ToDrop!");
}
```
