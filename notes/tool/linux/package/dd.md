---
title: Dd
man: dd
---

## Usage

```shell
dd OPTIONS
```

| Option | Description |
| --- | --- |
| `if` | Input file. |
| `of` | Output file. |
| `bs` | Read and write up to SIZE at a time (default 512 bytes). |
| `oflag` | Write as per the comma separated symbol list. |
| `count` | Copy only N input blocks. |
| `status` | Information to print to stderr. `none`: only errors; `noxfer`: no final transfer statistics; `progress`: periodic transfer statistics. |

Run `sync` at the end to be sure all data was written to the device (requires root).

## Example

Write ISO into a drive (`sudo` needed):

```shell
sudo dd if=linux.iso of=/dev/sda bs=4M
sudo sync
```

Benchmark write speed of a disk (for read speed use `hdparm`):

```shell
dd if=/dev/zero of=ddfile oflag=direct bs=128k count=16k; rm ddfile  # Write 2GiB file
```
