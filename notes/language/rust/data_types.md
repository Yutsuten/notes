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
| List of characters | `str` |
| Boolean | `bool` |
| Unit | `()` |

Defaults:

- Integer: `i32`
- Float: `f64`

## Compound Types

Literal array or string is hardcoded in the binary.

| Type | Literal notation | Owned notation |
| --- | --- | --- |
| Array | `[i32, 5]` | - |
| Slice | `&[i32]` | `Vec<i32>` |
| String | `&str` | `String` |
| Tuple | `(i32, bool)` | - |

When dealing with a slice (*pointer* to an array or string),
its contents are freed when the block that created it ends.
If we need to return that value, we need to take ownership of it.

There are many ways to "own" such literal data,
the most common way is to "convert" to `Vec` or `String`.

```rust
let owned_list = {  // Vec<i32>
    let myarray = [1, 2, 3];
    myarray[0..2].to_owned()
};
let owned_str = "Hello World".to_owned();  // String
```

## Variable Declaration

Constant or static variable (use it instead of the usual `let`):

```rust
const MY_CONSTANT  // Modifying it is impossible
static MY_STATIC   // Modifying it is unsafe
```

Mutable variable:

```rust
let mut mutable_var
```

Reference / dereference:

```rust
let reference = &4;
let ref reference = 4;

let dereference = *reference;
```

## Alias

Give a new name to a existing primitive or custom types (struct, enum etc)
with the `type` keyword.
It must use CamelCase naming convention.

```rust
type NanoSecond = u64;
```

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

## Type conversion

### Suffix & Casting

When creating a literal,
explicitly choose its type by adding the type as suffix:

```rust
let small_number = 5u8;
```

Implict type conversion is not possible,
but explicit type conversion can be performed using the `as` keyword.

```rust
let number1: i16 = 10;
let number2: i32 = number1 as i32;
```

### From Into traits

`From` and `Into` traits can be used to convert between types.

For example, given this customized type:

```rust
#[derive(Debug)]
struct Number(i32);
```

We can define conversions from `Number` from `i32`, and `i32` into `Number`.

```rust
// This automatically defines `Into`, usually you just define this one
use std::convert::From;
impl From<i32> for Number {
    fn from(item: i32) -> Self {
        Number(item)
    }
}

// This *do not* automatically defines `From`
use std::convert::Into;
impl Into<Number> for i32 {
    fn into(self) -> Number {
        Number(self)
    }
}
```

Then perform the conversions with:

```rust
fn main() {
    let num_from = Number::from(30);
    let num_into: Number = 50.into();  // Type annotation is necessary
}
```

### TryFrom TryInto traits

Same as `From` and `Into`, but `TryFrom` and `TryInto` are fallible.

For example, given this customized type:

```rust
#[derive(Debug, PartialEq)]
struct EvenNumber(i32);
```

This will only succeed if the `i32` is even.

```rust
use std::convert::TryFrom;
use std::convert::TryInto;

impl TryFrom<i32> for EvenNumber {
    type Error = ();
    fn try_from(value: i32) -> Result<Self, Self::Error> {
        if value % 2 == 0 {
            Ok(EvenNumber(value))
        } else {
            Err(())
        }
    }
}
```

Perform the conversions with:

```rust
let result_from_success = EvenNumber::try_from(8);  // Ok(EvenNumber(8))
let result_from_error = EvenNumber::try_from(5);    // Err(())
let result_into_success: Result<EvenNumber, ()> = 8i32.try_into();  // Ok(EvenNumber(8))
let result_into_error: Result<EvenNumber, ()> = 5i32.try_into();    // Err(())
```

## Examples

Scalar variables.

```rust
let a_char      = 'a';
let a_string    = "Yuki";
let a_float     = 1.0;
let a_boolean   = true;
let _unused_var = 1;    // Start unused variables with an underscore

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
