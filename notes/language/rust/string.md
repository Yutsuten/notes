---
title: String
ref: https://doc.rust-lang.org/std/string/struct.String.html
---

## Constructor

There is the `str` (sequence of chars) and the `String` type.

```rust
const GLOBAL_STR: &'static str = "Available globally";

let mystr = "Hello World";
let string_type1 = String::from(mystr);
let string_type2 = mystr.to_owned(); // `.to_string()` also ok
let back_to_str = string_type1.to_str();
let raw_string = r#"
    {
        "name": "John Doe",
        "age": 43,
    }"#;
```

To create a new `String` from existing values,
like `f-string` on python,
`format!()` is very useful.

```rust
let keyvalue_display = format!("{}={}", key, value);
```

## Methods

| Method | Description |
| --- | --- |
| `get` | Safer way to access index of the string. |
| `is_empty` | Returns `true` if the string has length of zero. |
| `len` | Get the length of the string in number of bytes. |
| `lines` | An iterator over the lines of a string, as string slices. |
| `trim` | Returns a string slice with leading and trailing whitespace removed (includes `\n`). |

### Split

[Split by lines](https://doc.rust-lang.org/std/primitive.str.html#method.lines):

```rust
for line in file_contents.lines() {
    println("{}", line);
}
```

[Split by a character](https://doc.rust-lang.org/std/primitive.str.html#method.split)
and [collect](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.collect)
into a collection (array):

```rust
let key_value: Vec<&str> = line.split('=').collect();
```

### Convert to number

```rust
let parsed: i32 = "5".parse().unwrap();
let turbo_parsed = "10".parse::<i32>().unwrap();
```
