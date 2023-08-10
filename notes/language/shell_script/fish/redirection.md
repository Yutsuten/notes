---
title: Redirection
ref: https://fishshell.com/docs/current/language.html#input-output-redirection
---

## Usage

File descriptor numbering:

| Number | File Descriptor |
| --- | --- |
| 0 | stdin |
| 1 | stdout |
| 2 | stderr |

### Simplest cases

```fish
command < stdin_input
command > stdout_output
command 2> stderr_output
```

Use `>>` to append output.

### Advanced cases

```fish
command &> stdout_stderr_output
command > stdout_stderr_output 2>&1
```
