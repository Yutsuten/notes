---
title: Dd
man: dd
---

## Usage

```shell
dd OPTIONS
```

| Option   | Description                                                                                                                            |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `if`     | Input file.                                                                                                                            |
| `of`     | Output file.                                                                                                                           |
| `bs`     | Read and write up to SIZE at a time (default 512 bytes).                                                                               |
| `count`  | Copy only N input blocks.                                                                                                              |
| `oflag`  | Perform the commands in the comma separated list after each block is written.                                                          |
| `conv`   | Perform the commands in the comma separated list once after all data has been written.                                                 |
| `status` | Information to print to stderr. `none`: only errors; `noxfer`: no final transfer statistics; `progress`: periodic transfer statistics. |

Use `conv=fdatasync` to be sure all data was written to the device.

## Example

Write ISO into a drive (`sudo` needed):

```shell
dd if=linux.iso of=/dev/sda bs=4M
```

Benchmark write speed of a disk by writing a 2GiB file (for read speed use `hdparm`):

```shell
dd if=/dev/zero of=ddfile bs=1M count=2k conv=fdatasync; rm ddfile
```

Copy a file into a hard link without breaking the hard link:

```shell
dd if=somefile of=hardlink bs=4M conv=notrunc
```
