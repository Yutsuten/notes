---
title: Std
ref: https://doc.rust-lang.org/std/index.html
---

## Environment variable

Read an environment variable.

```rust
use std::env;

fn main() {
    let home = env::var("HOME").unwrap();
    println!("{}", home);
}
```

## System Time

Get the current time since `UNIX_EPOCH` in seconds.

```rust
use std::time::SystemTime;

fn main() {
    let timestamp = SystemTime::now().duration_since(SystemTime::UNIX_EPOCH).unwrap();
    println!("{}", timestamp.as_secs());
}
```

## Filesystem

### File

Read/write files with the `fs::File::create` and `fs::File::open` approach:

```rust
use std::fs;
use std::io::prelude::*;

fn main() {
    let path = "config";

    // Write (create + truncate) file
    let mut file = match fs::File::create(&path) {
        Ok(file) => file,
        Err(reason) => panic!("Couldn't create file: {}", reason),
    };
    match file.write_all("Hello World!!".as_bytes()) {
        Ok(_) => println!("successfully wrote to file"),
        Err(reason) => panic!("Couldn't write to file: {}", reason),
    }

    // Read from file
    let mut file = match fs::File::open(&path) {
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
use std::fs;
use std::io::prelude::*;

fn main() {
    let path = "config";

    // Write (create + truncate) file
    let mut file = match fs::OpenOptions::new().write(true).create(true).truncate(true).open(path) {
        Ok(file) => file,
        Err(reason) => panic!("Couldn't create file: {}", reason),
    };
    match writeln!(file, "Hello World!!") {
        Ok(_) => println!("successfully wrote to file"),
        Err(reason) => panic!("Couldn't write to file: {}", reason),
    }

    // Append to file
    let mut file = match fs::OpenOptions::new().append(true).open(path) {
        Ok(file) => file,
        Err(reason) => panic!("Couldn't create file: {}", reason),
    };
    match writeln!(file, "Appended content!") {
        Ok(_) => println!("successfully appended to file"),
        Err(reason) => panic!("Couldn't append to file: {}", reason),
    }

    // Read from file
    let mut file = match fs::OpenOptions::new().read(true).open(path) {
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

### Metadata

To [get file's metadata](https://doc.rust-lang.org/std/fs/struct.Metadata.html)
use the `fs::metadata`.

Example for getting the last modification timestamp (since `UNIX_EPOCH`):

```rust
use std::fs;

let timestamp = fs::metadata("myfile").unwrap().modified().unwrap().duration_since(SystemTime::UNIX_EPOCH).unwrap().as_secs();
```
