---
title: Flow control
ref: https://doc.rust-lang.org/book/ch03-05-control-flow.html
---

## Condition

The boolean condition doesn't need to be surrounded by parentheses.

```rust
if n < 0 {
    print!("{} is negative", n);
} else if n > 0 {
    print!("{} is positive", n);
} else {
    print!("{} is zero", n);
}
```

`if let`:
Try to destructure a `tuple` or `struct`.

```rust
struct Point {
    x: u32,
    y: u32,
}
let point = Point { x: 15, y: 7 };
if let Point { x, y } = point {
    println!("Point is x: {}, y: {}", x, y);
} else {
    println!("Not a point");
}
```

`let if`:
It also can be used as an expression.

```rust
let number = if true {
    5
} else {
    10
};
```

`let else`:
Attempt to assign a variable or diverge (`break`, `return`, `panic!`),
which means it cannot continue.

```rust
let user_input = 101;
let grade @ 0 ..= 100 = user_input else {
    return;
};
println!("Grade: {}", grade);
```

## Loop

An infinite loop that continues until `break`.

```rust
loop {
    if skip_rest {
        continue;
    }
    if stop_loop {
        break;
    }
}
```

Break an outer loop using a label.

```rust
'outer: loop {
    loop {
        break 'outer;
    }
}
```

Retry an operation and return its result to a variable.

```rust
let result = loop {
    break 10 * 2;
};
```

## For loop

Use `for in` to loop an iterator.

```rust
for i in 1..10 {  // 1 to 9
    println!("i = {}", i);
}
for i in 1..=10 { // 1 to 10
    println!("i = {}", i);
}
```

## While loop

```rust
let mut price = 5;
while price < 100 {
    println!("I may buy it for ${}", price);
    price += 8;
}
println!("${} is too expensive!", price);
```

Loop while destructuring a variable succeeds:

```rust
let mut one_digit = Some(0);
while let Some(i) = one_digit {
    if i > 9 {
        println!("Greater than 9, quit!");
        one_digit = None;
    } else {
        println!("`i` is `{:?}`. Try again.", i);
        one_digit = Some(i + 1);
    }
}
```

## Match (switch)

All possible values must be covered.

```rust
match number {
    1 => println!("One!"),
    2 | 3 | 5 | 7 | 11 => println!("This is a prime"),
    n @ 13..=19 => println!("A teen of value {}", n),  // Bind value to n with `@`
    _ => println!("Ain't special"),
}
```

`if` can be used (it is called a *match guard*):

```rust
let number: u8 = 4;
match number {
    i if i == 0 => println!("Zero"),
    _ => println!("Greater than zero"),
}
```

Using a tuple:

```rust
let triple = (0, -2, 3);
match triple {
    (0, y, z)  => println!("First is `0`, `y` is {:?}, and `z` is {:?}", y, z),
    (1, ..)    => println!("First is `1` and the rest doesn't matter"),
    (.., 2)    => println!("last is `2` and the rest doesn't matter"),
    (3, .., 4) => println!("First is `3`, last is `4`, and the rest doesn't matter"),
    _          => println!("It doesn't matter what they are"),
}
```

Using an array/slice:

```rust
let array = [1, -2, 6];
match array {
    [0, second, third] => println!("array[0] = 0, array[1] = {}, array[2] = {}", second, third),
    [1, _, third] => println!("array[0] = 1, array[2] = {} and array[1] was ignored", third),
    [-1, second, ..] => println!("array[0] = -1, array[1] = {} and all the other ones were ignored", second),
    [3, second, tail @ ..] => println!("array[0] = 3, array[1] = {} and the other elements were {:?}", second, tail),
    [first, middle @ .., last] => println!("array[0] = {}, middle = {:?}, array[2] = {}", first, middle, last),
}
```

Using a structure:

```rust
struct Point {
    x: u8,
    y: u8,
}
let point = Point { x: 10, y: 5 };
match point {
    Point { x, y: 5 } => println!("x is {}", x),
    Point { x: 10, y } => println!("y is {}", y),
    Point { x, y } => println!("x is {}, y is {}", x, y),
}
```
