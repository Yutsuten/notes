---
title: Built-ins
man: zshbuiltins
---

## Man page

```shell
man zshbuiltins
```

## Change directory

The tool `cd` can be used to change directory.
When using `+n`,
it uses the directory stack.

```shell
cd OPTIONS DIR
cd OPTIONS OLD NEW
cd OPTIONS {+|-}n
```

| Option | Description |
| --- | --- |
| `-q` | Do not print the new directory stack. |
| `-s` | Do not change directory if DIR contains symlinks. |
| `-P` | Resolve symlinks into their true values. |
| `-L` | Do not resolve symlinks into their true values. |

### Examples

```shell
cd destination/path
cd -   # Last path (cd specific)
cd ~-  # Last path (expanded by the shell)
cd ~2  # From directory stack id 2 (expanded by the shell)
```

## Directory stack

It is possible to navigate between multiple directories efficiently.
For this we use a directory stack,
that can be accessed by `pushd` `popd` `dirs`.

### Pushd

Push a directory into the stack,
and `cd` into it.

```shell
pushd OPTIONS DIR
pushd OPTIONS OLD NEW
pushd OPTIONS {+|-}n
```

| Option | Description |
| --- | --- |
| `-q` | Do not print the new directory stack. |
| `-s` | Do not change directory if DIR contains symlinks. |
| `-P` | Resolve symlinks into their true values. |
| `-L` | Do not resolve symlinks into their true values. |

### Popd

Pop a directory from the stack,
and `cd` into it.

```shell
popd OPTIONS
popd OPTIONS {+|-}n
```

| Option | Description |
| --- | --- |
| `-q` | Do not print the new directory stack. |

### Dirs

Print the directories in the stack.

```shell
dirs OPTIONS
```

| Option | Description |
| --- | --- |
| `-c` | Clear the directory stack. |
| `-l` | Print directory names expanding `~`. |
| `-p` | Print one entry per line. |
| `-v` | Enumerate the directories in the stack. |
