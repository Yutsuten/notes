---
title: Xclip
---

## Usage

```shell
xclip OPTION FILE
```

| Option | Description |
| --- | --- |
| `-i` `-in` | Read from stdin into X selection (default). |
| `-o` `-out` | Print the selection to stdout. |
| `-selection` | Specify which X selection to use: `primary` `secondary` or `clipboard`. |
| `-f` `-filter` | Print the text piped back to stdout. |

## Examples

```bash
echo -n $(pwd) | xclip -sel clip
xclip -sel clip -o | jq . | xclip -sel clip
```
