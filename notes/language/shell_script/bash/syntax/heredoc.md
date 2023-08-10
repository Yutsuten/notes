---
title: Heredoc
ref: https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Here-Documents
---

## Usage

Read multi-line input from the current source and use as the standard input.

Use `<<-` to be able to indent the content with a tab character.

```shell
<< DELIMITER
here-document
DELIMITER
```

## Example

Create a multi-line variable.

```shell
read -r -d '' message << EOM
line1
line2
EOM
```
