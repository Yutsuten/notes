---
title: Data types
ref: https://doc.rust-lang.org/rust-by-example/primitives.html
---

## Scalar Types

| Type | Notation |
| --- | --- |
| Signed integers | `i8` `i16` `i32` `i64` `i128` `isize` |
| Unsigned integers | `u8` `u16` `u32` `u64` `u128` `usize` |
| Floating point | `f32` `f64` |
| Unicode characters (4 char) | `char` |
| Boolean | `bool` |
| Unit | `()` |

Defaults:

- Integer: `i32`
- Float: `f64`

Constant or static variable (use it instead of the usual `let`):

```c
const TYPE
static TYPE  // Modifying it is unsafe
```

## Compound Types

| Type | Notation (example) |
| --- | --- |
| Array | `[i32, 5]` |
| Slice | `&[i32]` |
| Tuple | `(i32, bool)` |

## Examples

Scalar variables.

```rust
let a_char       = 'a';
let a_string     = "Yuki";
let a_float: f64 = 1.0;  // Regular annotation
let an_integer   = 5i32; // Suffix annotation
let a_boolean    = true;

let mut inferred_type = 12; // Type i64 is inferred from the next line
inferred_type = 4294967296i64;

// Integer notations
let binary      = 0b0101;
let octal       = 0o6727;
let hexadecimal = 0xdeadbeef;

let easier_to_read1 = 10_000;
let easier_to_read2 = 0.000_001;
let scientific      = 1e4;

// A mutable variable's value can be changed, but only to the same type
let mut mutable = 12;
mutable = 21;

let mutable = true;  // Override with shadowing
```

Coumpound variables.

```rust
let myarray = [1, 5, 9, 13, 17];
let myarray: [i32, 3] = [1, 5, 9, 13, 17];  // Type signature is superfluous

let myslice = &myarray[1 .. 3];  // Same as myarray[1:3] in python [inclusive:exclusive]
let myslice: &[i32] = &myarray[1 .. 3];  // Type signature is superfluous

let mytuple = (1, true);
let mytuple: (i32, bool) = (1, true);  // Type signature is superfluous
```
