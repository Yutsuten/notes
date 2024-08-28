---
title: Cargo
man: cargo
---

## Usage

Rust's package manager.

```shell
cargo OPTIONS COMMAND
```

| Command | Description |
| --- | --- |
| `new` | Create a new Cargo package. |
| `add` | Add dependencies to a manifest file. |
| `remove` | Remove dependencies from a manifest file. |
| `build` | Compile the current package. |
| `run` | Build if not compiled, generate a binary and run. |
| `test` | Run the tests. |

```shell
cargo new myproject
cd myproject
cargo add iced
# Create your script...
cargo run
```

To build an optimized binary, run:

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