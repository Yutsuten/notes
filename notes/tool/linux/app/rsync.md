---
title: Rsync
---

## Usage

```shell
rsync OPTIONS SRC DEST
```

| Option | Description |
| --- | --- |
| `-r` | Recurse into directories. |
| `-a` | Archive mode (keep metadata, recursive). |
| `-u` | Update mode (skip files that are newer on the receiver). |
| `-E` | Preserve executability. |
| `-m` | Prune empty directories. |
| `-n` | Dry-run (no changes). |
| `-v` | Increase verbosity. |
| `--include` | Don't exclude files matching PATTERN. |
| `--exclude` | Exclude files matching PATTERN. |

## Examples

Synchronize from/to remote.

```shell
rsync 'remote:~/code/*.py' ~/code
```

Synchronize to Android (MTP).

```shell
rsync --recursive --inplace --size-only --delete --omit-dir-times --no-perms --verbose ~/local/ /android/mtp/
```

Ignore hidden folders:

```shell
rsync --exclude='.*/' SRC DEST
```

Specifying the directories and files to be moved.
(Include folders, then specific files and directories,
finally exclude everything else.
Order of options is important).

```shell
rsync -mav --include='*/' 'code/**.py' --exclude='*' ~/code backup
```
