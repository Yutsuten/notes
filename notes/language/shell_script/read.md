---
title: Read
ref: https://linuxcommand.org/lc3_man_pages/readh.html
---

## Usage

```shell
read OPTIONS VAR
```

| Option | Description |
| --- | --- |
| `-d` | Continue until the given character is read, rather than newline. |
| `-r` | Do not allow backslashes to escape any characters. |
| `-s` | Do not echo input coming from a terminal (for passwords). |
| `-t` | Time out in seconds. |

## Examples

Read a multi-line variable.

```shell
read -r -d '' message << EOM
line1
line2
EOM
```

Read a text from user within 10 seconds.

```shell
read -t 10 text
```

Read a password from user.

```shell
read -s password
```
