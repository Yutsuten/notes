---
title: Robocop
ref: https://github.com/MarketSquare/robotframework-robocop
---

## Usage

Static code analysis tool for Robot Framework.

```shell
robocop OPTIONS PATH
```

| Option | Description |
| --- | --- |
| `-r` `--reports` | Generate reports after scan. Use `all` to enable all reports. |
| `-l` `--list` | List all available rules. |
| `-lc` `--list-configurables` | List all available rules with configurable parameters. |
| `-o` `--output` | Path to output file. |

## Configuration

Options can be set in a file called `.robocop`.

```shell
--reports all
--output robocop.log
```

## Examples

Check all files in current directory.

```shell
robocop
```

Check all rules and their descriptions.

```shell
robocop --list
```
