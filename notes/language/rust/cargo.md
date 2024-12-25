---
title: Cargo
man: cargo
---

## Usage

Rust's package manager.

```shell
cargo OPTIONS COMMAND
```

| Command  | Description                                       |
| -------- | ------------------------------------------------- |
| `new`    | Create a new Cargo package.                       |
| `add`    | Add dependencies to a manifest file.              |
| `remove` | Remove dependencies from a manifest file.         |
| `build`  | Compile the current package.                      |
| `run`    | Build if not compiled, generate a binary and run. |
| `test`   | Run the tests.                                    |
| `update` | Update dependencies in the `Cargo.lock` file.     |

```shell
cargo new myproject
cd myproject
cargo add iced
# Create your script...
cargo run
```

More details on `cargo update` and `Cargo.toml`
[here](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html).

### Release builds

[Strip](https://doc.rust-lang.org/beta/cargo/reference/profiles.html#strip)
on releases to get smaller binaries by adding to `Cargo.toml`:

```toml
[profile.release]
strip = "symbols"
```

[Further optimizations](https://nnethercote.github.io/perf-book/build-configuration.html)
can be done with
[lto](https://doc.rust-lang.org/cargo/reference/profiles.html#lto)
and
[codegen-units](https://doc.rust-lang.org/cargo/reference/profiles.html#codegen-units).

```toml
[profile.release]
codegen-units = 1
lto = "fat"
```

Build the binary:

```shell
cargo build --release
```

## Tests

Create a directory named `tests`:

```txt
myproject
├── Cargo.toml
├── src
│   └── main.rs
│   └── lib.rs
└── tests
    ├── my_test.rs
    └── my_other_test.rs
```

Run a subset of the tests with by using a pattern.

```shell
cargo test PATTERN
```
