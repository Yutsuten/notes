---
title: Grep
man: git-grep
---

## Recommended configuration

Do not break lines on long lines matches (minified scripts!).

```shell
git config --global core.pager 'less -XFS'
```

## Usage

```shell
git grep OPTIONS PATTERN
```

| Option | Description |
| --- | --- |
| `-I` | Don’t match the pattern in binary files. |
| `-l` `--files-with-matches` | Show only the names of files that contain matches. |
| `-i` `--ignore-case` | Ignore case differences between the patterns and the files. |
| `-E` `--extended-regexp` | Extended regexp (default). |
| `-F` `--fixed-strings` | Use fixed strings for patterns (don’t interpret pattern as a regex). |

## Examples

Find and replace all matches:

```shell
git grep --files-with-matches FOO | xargs -n 1 sed -i 's/foo/boo/g'
```

Match with filter for files:

```shell
git grep 'some text' -- '*.[ch]'  # Only on .c or .h files
```

Search through all the history:

```shell
git rev-list --all | xargs git grep 'some text'
```
