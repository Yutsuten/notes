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
| `-E` | Use extended regular expressions |
| `-e` | Add the script to the commands to be executed (for adding multiple commands) |
| `-i` | Edit files in place |
| `-n` | Suppress empty patterns output |
| `-z` | Separate lines by NUL characters |

## Replace command: s

```shell
sed 's/pattern/result/g'
sed '0,/pattern/s//result/' # Once
sed 's/.*/\u&/'             # Capitalize
```

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

Find and replace all matches recursively in files:

```shell
git grep --files-with-matches foo | xargs -n 1 sed -i 's/foo/boo/g'
```

### Finding patterns

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

## Append command: a

Add text to next line.

```shell
sed '/pattern/a new text'
sed '0,/pattern/a new text'  # Once
```

## Insert command: i

Add text to previous line.

```shell
sed '/pattern/i new text'
sed '0,/pattern/i new text'  # Once
```

## Delete command: d

Delete line.

```shell
sed '/pattern/d'
sed '/start_pattern/,/end_pattern/d'                  # Delete lines between two patterns (inclusive)
sed '/start_pattern/,/end_pattern/{/end_pattern/!d}'  # Delete lines between two patterns (exclude)
sed '/start_pattern/,+1{/start_pattern/!d}'           # Delete following line to the match
```

## Read file command: r

Append text read from file.
Do not escape the `/` character on the file path.

```shell
sed -e '/{{ CONTENTS }}/r /tmp/contents.html' -e '/{{ CONTENTS }}/d'
```
