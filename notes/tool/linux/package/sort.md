---
title: Sort
man: sort
---

## Usage

Sort lines of text files.

```shell
sort OPTIONS FILE
```

| Option                         | Description                                    |
| ------------------------------ | ---------------------------------------------- |
| `-b` `--ignore-leading-blanks` | Ignore leading blanks.                         |
| `-f` `--ignore-case`           | Fold lower case to upper case characters.      |
| `-g` `--general-numeric-sort`  | Compare according to general numerical value.  |
| `-i` `--ignore-nonprinting`    | Consider only printable characters.            |
| `-h` `--human-numeric-sort`    | Compare human readable numbers (e.g., 2K 1G).  |
| `-n` `--numeric-sort`          | Compare according to string numerical value.   |
| `-R` `--random-sort`           | Shuffle, but group identical keys.             |
| `-r` `--reverse`               | Reverse the result of comparisons.             |
| `-u` `--unique`                | Output only the first of an equal run.         |
| `-V` `--version-sort`          | Natural sort of (version) numbers within text. |

## Example

Find all file extensions in a git repository:

```shell
git ls-files | sed -En 's/^.*\.([^.]*)$/\1/p' | sort -u
```
