---
title: Grep
man: grep
---

## Syntax

```shell
grep OPTIONS PATTERN FILE
```

| Option | Description |
| --- | --- |
| `-r` `--recursive` | Recursive (when FILE is a FOLDER) |
| `-c` `--count` | Print a count of matching lines. |
| `-C` `--context` `-NUM` | Print `NUM` lines of output context. |
| `-v` `--invert-match` | Invert the sense of matching, to select non-matching lines. |
| `-o` `--only-matching` | Print only the matched (non-empty) parts of matching lines. |
| `-l` `--files-with-matches` | Show only the names of files that contain matches. |
| `-f` `--file` | Obtain patterns, one per line, from the given file. Use `-` for stdin. |
| `-E` `--extended-regexp` | Interpret PATTERN as extended regular expressions. |
| `-F` `--fixed-strings` | Interpret PATTERN as fixed strings. |
| `-m` `--max-count` | Stop reading a file after NUM matching lines. |
| `-P` `--perl-regexp` | Interpret patterns as Perl-compatible regular expressions (PCREs). |
| `-q` `--quiet` `--silent` | Do not write anything to STDOUT. Useful when only status code matters. |
| `--exclude` | Exclude FILEs |

## Examples

Recursive (with exclusions) grep.

```shell
grep -r --exclude="*.swp" 'search_value' .
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
grep --files-with-matches foo | xargs -n 1 sed -i 's/foo/boo/g'
```
