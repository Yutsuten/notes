---
title: Sed
ref: https://www.gnu.org/software/sed/manual/sed.html
man: sed
---

## Usage

See the manual locally with `info sed`.

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

Any character other than backslash or newline can be used instead of a slash
to delimit the `pattern` and the `replacement`.

Within the `pattern` and the `replacement`,
the `pattern` delimiter itself can be used as a literal character
if it is preceded by a backslash.

```shell
sed 's/pattern/replacement/g'
sed 's#pattern#replacement#g'    # Using hash instead of slash
sed '0,/pattern/s//replacement/' # Once
sed 's/.*/\u&/'                  # Capitalize
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

## Stop reading input: q

Given that [we just want to print one line from a file](https://stackoverflow.com/a/30657175),
one can use this command.

```shell
sed '5q;d' file
```

Explanation:

> Commands within a script or script-file can be separated by semicolons `;` or newlines.
> Multiple scripts can be specified with `-e` or `-f` options.

We have two commands: `5q` `d`.

- `5q`: This will only run at the 5th line.
`sed` by default prints the line (`-n` is not specified).
So the 5th line is printed and sed will quit before executing `d` for that line.
- `d`: This will run on all lines from 1st to 4th.
Which means that even though `sed` prints all lines by default,
it is also deleting all lines by default.
Except for the 5th line, which `q` is run and the script stops immediately.
