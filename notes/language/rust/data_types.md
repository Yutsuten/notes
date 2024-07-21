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

```rust
const MY_CONSTANT  // Modifying it is impossible
static MY_STATIC   // Modifying it is unsafe
```

Mutable variable:

```rust
let mut mutable_var
```

## Compound Types

| Type | Notation (example) |
| --- | --- |
| Array | `[i32, 5]` |
| Slice | `&[i32]` |
| Tuple | `(i32, bool)` |

## Scope

- Variable scope is determined by the code block (inside `{` and `}`) it is in
- Variables declared with `let` can be overriden by another `let`
  - Changing mutability (`let` ⇔ `let mut`) is possible
- Instances declared inside inner code blocks have priority over outer declared ones (shadowing)

```rust
fn main() {
    let shadowed_binding = 1;
    {
        println!("before being shadowed: {}", shadowed_binding);  // 1
        let shadowed_binding = "abc";
        println!("shadowed in inner block: {}", shadowed_binding);  // abc
    }
    println!("outside inner block: {}", shadowed_binding);  // 1
    let shadowed_binding = 2;
    println!("shadowed in outer block: {}", shadowed_binding);  // 2
}
```

## Examples

Scalar variables.

```rust
let a_char       = 'a';
let a_string     = "Yuki";
let a_float: f64 = 1.0;  // Regular annotation
let an_integer   = 5i32; // Suffix annotation
let a_boolean    = true;
let _unused_var  = 1;    // Start unused variables with an underscore

let mut inferred_type = 12; // Type i64 is inferred from the next line
inferred_type = 4294967296i64;

// Integer notations
let binary      = 0b0101;
let octal       = 0o6727;
let hexadecimal = 0xdeadbeef;

let easier_to_read1 = 10_000;
let easier_to_read2 = 0.000_001;
let scientific      = 1e4;

// Declare first, initialize later
let myvar;
myvar = 10;

// A mutable variable's value can be changed, but only to the same type
let mut mutable = 12;
mutable = 21;
let mutable = true;  // Not mutable anymore - Override with shadowing
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
