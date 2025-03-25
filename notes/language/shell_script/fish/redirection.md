---
title: Redirection
ref: https://fishshell.com/docs/current/language.html#input-output-redirection
---

## File descriptors

| Number | File Descriptor |
| ------ | --------------- |
| 0      | stdin           |
| 1      | stdout          |
| 2      | stderr          |

## Send to strerr

Redirect stdout to stderr:

```fish
echo 'Something unexpected!' >&2
```

## Redirect to file

Redirect stdout or stderr to file (use `>>` to append output):

```fish
cmd < input_file
cmd > output_file  # stdout only
cmd 2> output_file # stderr only
```

Redirect everything to file:

```fish
cmd &> output_file     # stdout and stderr
cmd > output_file 2>&1 # stdout and stderr
```

## Combine outputs

If going to pipe or redirect output of several commands,
use `begin` and `end` to combine commands.

```fish
# List git tracked and untracked files
begin
    git ls-files
    git status --short | grep '^??' | cut -d' ' -f2-
end | less
```
