---
title: XmlLint
man: xmllint
---

## Usage

```shell
xmllint OPTIONS XML_FILE
```

| Option | Description |
| --- | --- |
| `--output` | Define a file path where xmllint will save the result of parsing. (Default is `stdout`) |
| `--format` | Reformat and reindent the output. |

## Example

```shell
xmllint --output output.xml --format input.xml
```
