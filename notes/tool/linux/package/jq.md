---
title: Jq
ref: https://man.archlinux.org/man/community/jq/jq.1.en
---

## Usage

Command-line JSON processor.

```shell
jq OPTIONS FILTER FILE
```

| Option | Description |
| --- | --- |
| `-r` `--raw-output` | If the filter's result is a string then it will be written directly to standard output. |

It also accepts JSON contents from stdin.

### Filters

| Filter      | Description                                                                                |
| ----------- | ------------------------------------------------------------------------------------------ |
| `.`         | Identity operator. Takes its input and produces it unchanged as output.                    |
| `.foo`      | Object Identifier-Index. Takes the value at the key `foo` from a JSON object (dictionary). |
| `.[2]`      | Array index. Zero-based, negative indices are allowed.                                     |
| `del(.foo)` | Removes a key and its corresponding value from an object.                                  |

## Examples

Pretty-print a JSON.

```shell
jq . file.json
```

Pretty-print a JSON with a key-value removed.

```shell
jq 'del(.foo)' file.json
```

Get a value from a object inside an array.

```shell
jq '.[0].version' file.json
```
