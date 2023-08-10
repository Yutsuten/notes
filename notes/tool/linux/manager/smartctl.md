---
title: Smartctl
man: smartctl
---

## Usage

```shell
smartctl OPTIONS DEVICE
```

| Option | Description |
| --- | --- |
| `-i` `--info` | Prints device information. |
| `-a` `--all` | Prints all SMART information about the disk. |
| `-l` `--log` | Prints various device logs. Ex: `selftest` `selective` |
| `-c` `--capabilities` | Prints SMART capabilities (available tests, progress of running tests, etc). |
| `-C` `--captive` | Runs self-tests in captive (foreground) mode. |
| `-t` `--test` | Executes a test immediately. Ex: `short` `long` `conveyance` |
| `-X` `--abort` | Aborts non-captive SMART Self Tests. |
| `-H` `--health` | Prints the health status of the device. Use `-a` if problems are detected. |
| `-d` `--device` | Specifies the type of the device. Ex: `sat`. See also [USB Device Support](https://www.smartmontools.org/wiki/Supported_USB-Devices). |

## Examples

Start a short test in the background:

```shell
sudo smartctl -t short /dev/sda
```

Check test progress:

```shell
sudo smartctl -c /dev/sda
```

Print disk health status:

```shell
sudo smartctl -H /dev/sda
```
