---
title: Tar
man: tar
---

## Usage

```shell
tar OPTIONS SOURCE
```

On options, hyphen is optional.

| Option | Description |
| --- | --- |
| `-c` `--create` | Create tar file. |
| `-x` `--extract` `--get` | Extract tar file. |
| `-t` `--list` | List the contents of an archive. |
| `-C` `--directory` | Set current directory. |
| `-f` `--file` | Set the name of the file to create / extract. |
| `-h` `--dereference` | Follow symlinks; archive and dump the files they point to. |
| `-a` `--auto-compress` | Use archive suffix to determine the compression program. |
| `-J` `--xz` | Enable **xz** algorithm. |
| `-z` `--gzip` `--gunzip` `--ungzip` | Enable **gnuzip** algorithm. |
| `--zstd` | Enable **zstandart** algorithm. |
| `-v` `--verbose` | Verbosely list files processed. |

Gzipped files can have `.tgz` or `.tar.gz` extensions.

Xz files have `.tar.xz` extension.

Zstandart files have `.tar.zst` extension.

## Examples

Compress a folder:

```shell
tar -cf grouped.tar myfolder   # Create File
tar -czf grouped.tgz myfolder  # Create Gzipped File
```

Extract gzipped file:

```shell
tar -xzf file.tgz
```

List files in tar file:

```shell
tar -tf file.tar
```

Compress with `zstd` and encrypt with `gpg`:

```shell
tar --zstd -cC ~ Folder/ \
  | gpg -e --default-recipient-self > folder.tar.zst.gpg

gpg --decrypt folder.tar.zst.gpg \
    | tar --zstd -xC ~
```
