---
title: Function
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

If the function does not return, use `!` return type.

```rust
fn critical_error() -> ! {
    panic!("This call never returns.");
}
```

### Arguments

Given this struct:

```rust
struct Book {
    title: &'static str,
    year: u32,
}
```

To borrow as an immutable reference:

```rust
fn borrow_book(book: &Book) {
    println!("I immutably borrowed {} - {} edition", book.title, book.year);
}

fn main() {
    let immutabook = Book {
        title: "Hello, World",
        year: 1979,
    };
    borrow_book(&immutabook);
}
```

To borrow as a mutable reference:

```rust
fn new_edition(book: &mut Book) {
    book.year = 2024;
    println!("I mutably borrowed {} - {} edition", book.title, book.year);
}

fn main() {
    let mut mutabook = Book {
        title: "Hello, World",
        year: 1979,
    };
    new_edition(&mut mutabook);
}
```

Take it by value (consume the variable).

```rust
fn destroy_edition(book: Book) {
    println!("Destroyed the book {} - {} edition", book.title, book.year);
}

fn main() {
    let book = Book {
        title: "Hello, World",
        year: 1979,
    };
    destroy_edition(book);
    // println!("Where's the book {} - {} ?", book.title, book.year);
    // ^ Uncommenting above line will result in compile-time error
}
```

### Function as argument

The lifetime of the arguments used inside the function argument
must be defined by using a trait:

| Trait    | Read                                | Write                               | Delete                              | Description                                             |
| -------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ------------------------------------------------------- |
| `Fn`     | <span class="center green">✔</span> | <span class="center red">✘</span>   | <span class="center red">✘</span>   | Use the captured value by immutable reference (`&T`).   |
| `FnMut`  | <span class="center green">✔</span> | <span class="center green">✔</span> | <span class="center red">✘</span>   | Use the captured value by mutable reference (`&mut T`). |
| `FnOnce` | <span class="center green">✔</span> | <span class="center green">✔</span> | <span class="center green">✔</span> | Uses the captured value by value (`T`).                 |

Both functions and closures can be used as argument in the same way.

```rust
fn call_me<F: Fn()>(callback: F) {
    callback();
}
```

### Function as return value

When returning a function, `move` is required so the variables aren't dropped.

```rust
fn create_fn() -> impl Fn() {
    let text = "Fn".to_owned();
    move || println!("This is a: {}", text)
}

fn create_fnmut() -> impl FnMut() {
    let text = "FnMut".to_owned();
    move || println!("This is a: {}", text)
}

fn create_fnonce() -> impl FnOnce() {
    let text = "FnOnce".to_owned();
    move || println!("This is a: {}", text)
}
```

## Closures

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

Use `move` to move ownership of used variables into the closure.
This way the variables won't be usable outside it anymore.

```rust
fn main() {
    let haystack = vec![1, 2, 3];
    let contains = move |needle| haystack.contains(needle);
    println!("{}", contains(&1));
    println!("{}", contains(&4));
    // println!("There're {} elements in vec", haystack.len());
    // ^ Uncommenting above line will result in compile-time error
}
```
