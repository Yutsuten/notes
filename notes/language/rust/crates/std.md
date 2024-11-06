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

| Function | Shell equivalent | Description |
| --- | --- | --- |
| `create_dir_all` | `mkdir -p` | Recursively create directories. |
| `create_dir` | `mkdir` | Create directory. |
| `exists` | `test -e` | Return `true` if file exists. |
| `metadata` | `stat` | Get file's metadata. |
| `read_dir` | `ls` | List entries in directory. |
| `read_link` | `realpath` | Return the path to the file a symbolic link points to. |
| `remove_file` | `rm` | Remove file. |

### File

Write/read a [File](https://doc.rust-lang.org/std/fs/struct.File.html)
with the `create` and `open` methods:

```rust
use std::fs;
use std::io::prelude::*;

let path = "config";

// Write (create + truncate) file
let mut file = fs::File::create(&path).unwrap();
file.write_all("Hello World!!".as_bytes()).unwrap();

// Read from file
let mut file = fs::File::open(&path).unwrap();
let mut s = String::new();
file.read_to_string(&mut s).unwrap();
```

For all the file manipulation options, use
[OpenOptions](https://doc.rust-lang.org/std/fs/struct.OpenOptions.html).

- [BufReader](https://doc.rust-lang.org/std/io/struct.BufReader.html)
is useful to read a file partially (i.e. a single line)
- [writeln!](https://doc.rust-lang.org/std/macro.writeln.html)
is useful to write lines to the file

```rust
use std::fs;
use std::io::prelude::*;

let path = "config";

// Write (create + truncate) file
let mut file = fs::OpenOptions::new().write(true).create(true).truncate(true).open(path).unwrap();
writeln!(file, "Hello World!!").unwrap();

// Append to file
let mut file = fs::OpenOptions::new().append(true).open(path).unwrap();
writeln!(file, "Appended content!").unwrap();

// Read from file
let file = fs::OpenOptions::new().read(true).open(path).unwrap();
let mut line = String::new();
let mut reader = BufReader::new(file);
reader.read_line(&mut line).unwrap();
```

### Metadata

To [get file's metadata](https://doc.rust-lang.org/std/fs/struct.Metadata.html)
use the `fs::metadata`.

Example for getting the last modification timestamp (since `UNIX_EPOCH`):

```rust
use std::fs;

let timestamp = fs::metadata("myfile").unwrap().modified().unwrap().duration_since(SystemTime::UNIX_EPOCH).unwrap().as_secs();
```

### Directory

Use [read_dir](https://doc.rust-lang.org/std/fs/fn.read_dir.html)
to get an iterator over the entries within a directory.
For example, to list all file names (not folder or symlink) in a directory:

```rust
let file_names_iter = fs::read_dir("./").unwrap()
    .map(|res_entry| res_entry.unwrap())
    .filter(|entry| entry.path().is_file())
    .map(|entry| entry.file_name().into_string().unwrap())
for file_name in file_names_iter {
    println!("{}", file_name);
}
```

Use [create_dir_all](https://doc.rust-lang.org/std/fs/fn.create_dir_all.html)
to recursively create a directory and all of its parent components if they are missing.

```rust
fs::create_dir_all(format!("{home}/some/dir", home=env::var("HOME").unwrap())).unwrap();
```

## Collections

[Collections](https://doc.rust-lang.org/std/collections/index.html)
documentation.

### HashSet

Use `HashSet` to calculate the difference between two sets:

```rust
use std::collections::HashSet;

let a = HashSet::from([1, 2, 3, 4]);
let b = HashSet::from([2, 4]);
println!("{:?}", a.difference(&b));
```

Use `from_iter` if creating a `HashSet` from `Vec`:

```rust
let myvec = vec![1, 2, 3];
let myset = HashSet::from_iter(myvec);  // Use myvec.clone() to not consume myvec
```

### HashMap

Use `HashMap` to create dictionary-like objects.

Create and initialize a `HashMap`:

```rust
use std::collections::HashMap;
let mut dictionary: HashMap<&String, i32> = HashMap::new();
```

Create a new entry:

```rust
dictionary.insert("atk", 6);
```

Modify an existing entry:

```rust
dictionary.entry("atk").and_modify(|value| *value += 1);
```

Iterate/access entries:

```rust
for (key, value) in &dictionary { // Order is arbitrary
    println!("{key}: {value}");
}
dictionary["atk"]; // Use `.get()` to deal with non-existent keys
```

Remove an entry:

```rust
dictionary.remove("atk");
```

Other common methods:

| Method         | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `contains_key` | Returns `true` if the map contains a value for the specified key. |
| `get`          | Returns a reference to the value corresponding to the key.        |
| `len`          | Returns the number of elements in the map.                        |
| `keys`         | An iterator visiting all keys in arbitrary order.                 |

Using `keys().collect()` may be useful to `.sort()` and iterate the `HashMap` in the same order,
because by default the order can change each run.

## Process

Run external commands.

```rust
process::Command::new("swaymsg").args(["output", "*", "bg", wallpaper.as_str(), "fill"]).output().unwrap();
```
