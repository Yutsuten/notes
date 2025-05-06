---
title: Iterators
ref: https://doc.rust-lang.org/std/iter/trait.Iterator.html
---

## Basic

With iterators it is possible to chain several operations,
and at the end use `collect` to save the result as a collection.

Double the value of every element:

```rust
let numbers = 1..=3;
let doubled: Vec<i32> = numbers.map(|num| num * 2).collect();
```

Convert a char slice to a `String`:

```rust
let chars = &['H', 'e', 'l', 'l', 'o'];
let text: String = chars.iter().collect();
```

## Methods

| Method      | Description                                                                            |
| ----------- | -------------------------------------------------------------------------------------- |
| `collect`   | Transforms an iterator into a collection. May use *turbofish* `::<>` annotation.       |
| `enumerate` | Creates an iterator which gives the current iteration count as well as the next value. |
| `map`       | Takes a closure and creates an iterator which calls that closure on each element.      |
| `rev`       | Reverses an iterator’s direction.                                                      |

### Loop with index

To get the current index while looping an iterator,
use `enumerate`:

```rust
for (i, line) in text.lines().enumerate() {
    println!("Line {}: {}", i, line);
}
```

Same but backwards:

```rust
for (i, line) in text.lines().enumerate().rev() {
    println!("Line {}: {}", i, line);
}
```
