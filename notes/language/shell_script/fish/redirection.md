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

### Examples

Redirect stdout to stderr:

```fish
echo 'to stderr' >&2
```

Redirect stdout or stderr to file (use `>>` to append output):

```fish
command < stdin_input
command > stdout_output
command 2> stderr_output
```

Redirect everything to file:

```fish
command &> stdout_stderr_output
command > stdout_stderr_output 2>&1
```
