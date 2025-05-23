---
title: String
ref: https://doc.rust-lang.org/std/string/struct.String.html
---

## Constructor

There is the `&str` (sequence of chars) and the `String` type.

```rust
const GLOBAL_STR: &'static str = "Available globally";

let mystr = "Hello World";
let string_type1 = String::from(mystr);
let string_type2 = mystr.to_owned(); // `.to_string()` also ok
let back_to_str = string_type1.as_str();
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

Available for both `String` and `&str`:

| Method             | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| `is_empty`         | Returns `true` if the string has length of zero.                                     |
| `len`              | Get the length of the string in number of bytes.                                     |
| `trim`             | Returns a string slice with leading and trailing whitespace removed (includes `\n`). |

Available for `String`:

| Method             | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| `clear`            | Truncates this `String`, removing all contents.                                      |
| `push_str`         | Appends a given string slice onto the end of this `String`.                          |

Available for `&str`:

| Method             | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| `char_indices`     | Returns an iterator over the chars of a string slice, and their positions.           |
| `get`              | Extract a slice from a string using a range.                                         |
| `lines`            | An iterator over the lines of a string, as string slices.                            |
| `split_whitespace` | Splits a string slice by any amount of whitespace.                                   |
| `split`            | Splits a string slice by one or more characters.                                     |

### Loop

Loop characters with their positions:

```rust
let s = "Hello World";
for (i, c) in s.char_indices() {
    println!("Index: {}, Character: {}", i, c);
}
```

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

Split by space and remove empty values:

```rust
let values: Vec<String> = line
    .split_whitespace()
    .map(|s| s.to_owned())
    .collect();
```

### Convert to number

```rust
let parsed: i32 = "5".parse().unwrap();
let turbo_parsed = "10".parse::<i32>().unwrap();
```

## Matching

Given an owned `String`,
match its values with:

```rust
match text.as_str() {
    "true" => true,
    "false" => false,
    _ => panic!("Expected true or false");
}
```

## Update without assign

If updating a `String` in a function that received it as `&mut`,
reassigning do not work.

```rust
fn update_string(&mut s) {
    // Instead of:
    // s = String::from("New string");
    // Do:
    s.clear();
    s.push_str("New string");
}
```
