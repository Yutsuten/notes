---
title: Modprobe
man: modprobe
---

## Usage

Add and remove modules from the Linux Kernel.

```shell
modprobe OPTIONS MODULE_NAME
```

| Option | Description |
| --- | --- |
| `-r` `--remove` | Remove a module instead of adding. |

## Examples

Load `snd_aloop` for [DroidCam](https://droidcam.app/linux/):

```shell
sudo modprobe snd_aloop
sudo modprobe -r snd_aloop  # sudo rmmod -f snd_aloop
```
