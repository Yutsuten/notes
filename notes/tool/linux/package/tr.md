---
title: Tr
man: tr
---

Translate or delete characters.

## Usage

```shell
tr OPTIONS SET1 SET2
```

| Option          | Description                               |
| --------------- | ----------------------------------------- |
| `-d` `--delete` | Delete characters instead of translating. |

## Example

Replace `?` with `!`:

```shell
echo 'Hello world!?' | tr '?' '!' # => 'Hello world!!'
```

Remove `-` or `:` from date/time,
useful if going to compare:

```shell
echo '2025-03-25' | tr -d '-' # => 20250325
echo '17:57:53' | tr -d ':' # => 175753
```
