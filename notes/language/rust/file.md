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
        Err(why) => panic!("Couldn't create file: {}", why),
        Ok(file) => file,
    };
    match file.write_all("Hello World!!".as_bytes()) {
        Err(why) => panic!("Couldn't write to file: {}", why),
        Ok(_) => println!("successfully wrote to file"),
    }

    // Read from file
    let mut file = match File::open(&path) {
        Err(why) => panic!("Couldn't open file: {}", why),
        Ok(file) => file,
    };
    let mut s = String::new();
    match file.read_to_string(&mut s) {
        Err(why) => panic!("Couldn't read file: {}", why),
        Ok(_) => print!("Successfully read file:\n{}", s),
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
        Err(why) => panic!("Couldn't create file: {}", why),
        Ok(file) => file,
    };
    match writeln!(file, "Hello World!!") {
        Err(why) => panic!("Couldn't write to file: {}", why),
        Ok(_) => println!("successfully wrote to file"),
    }

    // Append to file
    let mut file = match OpenOptions::new().append(true).open(path) {
        Err(why) => panic!("Couldn't create file: {}", why),
        Ok(file) => file,
    };
    match writeln!(file, "Appended content!") {
        Err(why) => panic!("Couldn't append to file: {}", why),
        Ok(_) => println!("successfully appended to file"),
    }

    // Read from file
    let mut file = match OpenOptions::new().read(true).open(path) {
        Err(why) => panic!("Couldn't open file: {}", why),
        Ok(file) => file,
    };
    let mut s = String::new();
    match file.read_to_string(&mut s) {
        Err(why) => panic!("Couldn't read file: {}", why),
        Ok(_) => print!("Successfully read file:\n{}", s),
    }
}
```
