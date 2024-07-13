---
title: Unar
---

## Usage

Objective-C tools for uncompressing archive files.

```shell
unar OPTIONS ARCHIVE
```

| Option | Description |
| --- | --- |
| `-e` `-encoding` | The encoding to use for filenames. Use `help` to get a list. |
| `-o` `-output-directory` | The directory to write the contents of the archive to. Defaults to the current directory. |

Check if the filenames are properly encoded with the `lsar` command.

```shell
lsar ARCHIVE
```
