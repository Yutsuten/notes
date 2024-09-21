---
title: Grep
man: grep
---

## Syntax

```shell
grep OPTIONS PATTERN FILE
```

| Option                      | Description                                                            |
| --------------------------- | ---------------------------------------------------------------------- |
| `-C` `--context` `-NUM`     | Print `NUM` lines of output context.                                   |
| `-E` `--extended-regexp`    | Interpret PATTERN as extended regular expressions.                     |
| `-F` `--fixed-strings`      | Interpret PATTERN as fixed strings.                                    |
| `-I`                        | Exclude binary files from search.                                      |
| `-P` `--perl-regexp`        | Interpret patterns as Perl-compatible regular expressions (PCREs).     |
| `-c` `--count`              | Print a count of matching lines.                                       |
| `-f` `--file`               | Obtain patterns, one per line, from the given file. Use `-` for stdin. |
| `-l` `--files-with-matches` | Show only the names of files that contain matches.                     |
| `-m` `--max-count`          | Stop reading a file after NUM matching lines.                          |
| `-o` `--only-matching`      | Print only the matched (non-empty) parts of matching lines.            |
| `-q` `--quiet` `--silent`   | Do not write anything to STDOUT. Useful when only status code matters. |
| `-r` `--recursive`          | Recursive (when FILE is a FOLDER)                                      |
| `-v` `--invert-match`       | Invert the sense of matching, to select non-matching lines.            |
| `--exclude`                 | Exclude FILEs                                                          |

## Examples

Recursive (with exclusions) grep ignoring binary files.

```shell
grep -Ir --exclude="*.swp" 'search_value' .
```

Search using extended regexp in a file.

```shell
grep -Ev 'boo|foo' file
```

Obtain patterns from stdin.

```shell
echo 'pattern' | grep -f - file
```

Find and replace all matches recursively in files:

```shell
grep -I --files-with-matches foo | xargs -n 1 sed -i 's/foo/boo/g'
```
