---
title: Array
ref: https://doc.rust-lang.org/rust-by-example/primitives/array.html
---

## Constructor

Slice is subset of an array.
They work in the same way.

```rust
let myarray = [1, 5, 9, 13, 17];
let myarray: [i32, 3] = [1, 5, 9, 13, 17];  // Type signature is superfluous

let myslice = &myarray[1 .. 3];  // Same as myarray[1:3] in python [inclusive:exclusive]
let myslice: &[i32] = &myarray[1 .. 3];  // Type signature is superfluous

let emptyarray = [];
let emptyslice = &[];
```

## Methods

| Method | Description |
| --- | --- |
| `get` | Safer way to access index of array/slice. |
| `len` | Get the length of the array/slice. |

## Examples

Accessing elements:

```rust
let first = myarray[0];
let first = myarray.get(0);  // More safe
```

Borrow a slice to a function:

```rust
fn analyze_slice(slice: &[i32]) {
    println!("First element of the slice: {}", slice[0]);
    println!("The slice has {} elements", slice.len());
}

fn main() {
    let myarray = [1, 5, 9, 13, 17];
    println!("Array analyze:");
    analyze_slice(&myarray);
    println!("Slice analyze:");
    analyze_slice(&myarray[1 .. 3]);
}
```

Loop an array/slice:

```rust
for i in 0 .. slice.len() + 1 {
    match slice.get(i) {
        Some(val) => println!("{}: {}", i, val),
        None => println!("{}: Out of bound", i),
    }
}
```
