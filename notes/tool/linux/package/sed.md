---
title: Sed
man: sed
---

## Usage

```shell
sed OPTIONS INPUTFILE
```

| Option | Description |
| --- | --- |
| `-i` | Edit files in place |
| `-e` | Add the script to the commands to be executed (for adding multiple commands) |
| `-n` | Suppress empty patterns output |
| `-E` | Use extended regular expressions |

## Examples

### Edit file

```shell
sed -i 's/pattern/result/g' myfile     # Replace
sed -i 's/.*/\u&/' myfile              # Capitalize
sed -i '0,/pattern/s//result/' myfile  # Replace once
sed -i '/pattern/a new text' myfile    # Add after
sed -i '0,/pattern/a new text' myfile  # Add after once
sed -i '/pattern/i new text' myfile    # Add before
sed -i '0,/pattern/i new text' myfile  # Add before once
sed -i '/pattern/d'                    # Delete single line
sed -i '/start_pattern/,/end_pattern/d'                  # Delete lines between two patterns (inclusive)
sed -i '/start_pattern/,/end_pattern/{/end_pattern/!d}'  # Delete lines between two patterns (exclude)
sed -i '/start_pattern/,+1{/start_pattern/!d}'           # Delete following line to the match
```

### Removing special characters

Remove ANSI escape sequences:

```shell
sed 's/\x1b\[[0-9;]*m//g'           # Remove color sequences only
sed 's/\x1b\[[0-9;]*[mGKH]//g'      # Remove color and move sequences
sed 's/\x1b\[[0-9;]*[a-zA-Z]//g'    # Remove all escape sequences
```

Remove carriage return `\M`:

```shell
sed 's/\r//'
```

Remove trailing newlines:

```shell
sed -Ez '$ s/\n+$//'
```

### Find patterns

Regex option `p` : If the substitution was made, then print the new pattern space.

```shell
sed -nE 's/.*"total":([0-9]+).*/\1/p'
sed -n 's/^Your code has been rated at \([-0-9.]*\)\/.*/\1/p' .pylint
```

Note: `\d` does not work on sed. Use `[0-9]` instead.

For example, to make a linter fail if it contains more than N errors, run:

```shell
echo 'Found 4 errors' | sed -nE 's/^Found ([0-9]+) error.*$/\1/p' | xargs test 4 -ge
```
