---
title: Compile
ref: https://doc.rust-lang.org/rust-by-example/index.html
---

## Single file

Most basic command for compiling:

```shell
rustc main.rs
```

## Makefile

Single file, compile direct to executable.

```makefile
build:
	rustc main.rs
```

## Crate

From a rust script (without a `main` function),
run this command to generate a library:

```shell
rustc --crate-type=lib hello.rs
```

This generates a `libhello.rlib` file.

Then when compiling the script that uses `libhello.rlib`,
we use the `--extern` option.

```shell
rustc main.rs --extern rary=libhello.rlib && ./main
```

Sample files for reference:

`hello.rs`

```rust
pub fn greet() {
    println!("Hello World!");
}
```

`main.rs`

```rust
mod hello;

fn main() {
    hello::greet();
}
```
