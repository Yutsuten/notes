---
title: Clap
ref: https://docs.rs/clap/latest/clap/_derive/_tutorial/chapter_0/index.html
---

## Install

Command line argument parser.

```shell
cargo add -F derive clap
```

## Usage

Example of program with 3 available arguments:

- `-r/--random` boolean
- `-e/--restore` boolean
- `-s/--set` filepath

Only one argument can be used at a time by using `group` setting in `arg`.

```rust
use std::path::PathBuf;
use clap::Parser;

/// Set wallpaper in sway
#[derive(Parser)]
#[command(version, about, long_about = None)]
struct Args {
    /// Change to a random wallpaper
    #[arg(short, long, group = "input")]
    random: bool,

    /// Restore the last wallpaper used
    #[arg(short = 'e', long, group = "input")]
    restore: bool,

    /// Set an arbitrary wallpaper
    #[arg(short, long, group = "input", value_name = "FILE")]
    set: Option<PathBuf>,
}

fn main() {
    let args = Args::parse();
    println!("Random {:?}!", args.random);
    println!("Restore {:?}!", args.restore);
    println!("Set {:?}!", args.set);
}
```

Auto generated help:

```txt
Set wallpaper in sway

Usage: wallpaper [OPTIONS]

Options:
  -r, --random      Change to a random wallpaper
  -e, --restore     Restore the last wallpaper used
  -s, --set <FILE>  Set an arbitrary wallpaper
  -h, --help        Print help
  -V, --version     Print version
```
