---
title: Mktemp
man: mktemp
---

## Usage

```shell
mktemp OPTIONS TEMPLATE
```

| Option | Description |
| --- | --- |
| `-d` `--directory` | Create a directory instead of a file. |
| `-p` `--tmpdir` | Use the temporary directory, or the directory set by the option. |

:::tip
Use several `X` *anywhere* for placing the random characters.
Only the last group of at least 3 consecutive `X` are considered for this.

If using `mktemp` with no options at all,
the temporary directory and the `tmp.XXXXXXXXXX` template is used.
:::

Creating a temporary **file** in `/tmp`:

```shell
mktemp --tmpdir app-XXXXXXXX
```

Creating a temporary **directory** in `/tmp`:

```shell
mktemp --tmpdir --directory app-XXXXXXXX
```
