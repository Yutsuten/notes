---
title: Hdparm
man: hdparm
---

## Usage

Get/set SATA/IDE device parameters.

```shell
hdparm OPTIONS device
```

| Option | Description |
| --- | --- |
| `-t` | Perform timings of device reads for benchmark and comparison purposes. |
| `-T` | Perform  timings of cache reads for benchmark and comparison purposes. |

## Example

Benchmark read speed of a disk (for write speed use `dd`):

```shell
sudo hdparm -t /dev/sda1
```
