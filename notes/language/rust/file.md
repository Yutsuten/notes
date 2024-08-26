---
title: File
ref: https://doc.rust-lang.org/std/fs/struct.File.html
---

## Read/write to file

The `File::create` and `File::open` approach:

```rust
use std::fs::File;
use std::io::prelude::*;

fn main() {
    let path = "config";

    // Write (create + truncate) file
    let mut file = match File::create(&path) {
        Ok(file) => file,
        Err(reason) => panic!("Couldn't create file: {}", reason),
    };
    match file.write_all("Hello World!!".as_bytes()) {
        Ok(_) => println!("successfully wrote to file"),
        Err(reason) => panic!("Couldn't write to file: {}", reason),
    }

    // Read from file
    let mut file = match File::open(&path) {
        Ok(file) => file,
        Err(reason) => panic!("Couldn't open file: {}", reason),
    };
    let mut s = String::new();
    match file.read_to_string(&mut s) {
        Ok(_) => print!("Successfully read file:\n{}", s),
        Err(reason) => panic!("Couldn't read file: {}", reason),
    }
}
```

For all the [file manipulation options](https://doc.rust-lang.org/std/fs/struct.OpenOptions.html),
use `OpenOptions`.
Also `writeln!` is useful to write lines to the file.

```rust
use std::fs::OpenOptions;
use std::io::prelude::*;

fn main() {
    let path = "config";

    // Write (create + truncate) file
    let mut file = match OpenOptions::new().write(true).create(true).truncate(true).open(path) {
        Ok(file) => file,
        Err(reason) => panic!("Couldn't create file: {}", reason),
    };
    match writeln!(file, "Hello World!!") {
        Ok(_) => println!("successfully wrote to file"),
        Err(reason) => panic!("Couldn't write to file: {}", reason),
    }

    // Append to file
    let mut file = match OpenOptions::new().append(true).open(path) {
        Ok(file) => file,
        Err(reason) => panic!("Couldn't create file: {}", reason),
    };
    match writeln!(file, "Appended content!") {
        Ok(_) => println!("successfully appended to file"),
        Err(reason) => panic!("Couldn't append to file: {}", reason),
    }

    // Read from file
    let mut file = match OpenOptions::new().read(true).open(path) {
        Ok(file) => file,
        Err(reason) => panic!("Couldn't open file: {}", reason),
    };
    let mut s = String::new();
    match file.read_to_string(&mut s) {
        Ok(_) => print!("Successfully read file:\n{}", s),
        Err(reason) => panic!("Couldn't read file: {}", reason),
    }
}
```
