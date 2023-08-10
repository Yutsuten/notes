---
title: Shuf
ref: https://man.archlinux.org/man/core/coreutils/shuf.1.en
---

## Usage

Generate random permutations.

With no FILE, stdin is used.

```shell
shuf OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `-n` `--head-count` | Output at most COUNT lines. |
| `-z` `--zero-terminated` | Line delimiter is NUL, not newline. |

## Example

Shuffle file names in current directory:

```shell
printf '%s\n' * | shuf
```

Select random file from directory:

```shell
printf '%s\0' * | shuf -zn 1
```
