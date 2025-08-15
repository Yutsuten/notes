---
title: Mkfs
---

## Partition format

Use `/dev/*` to format devices.
List devices with `lsblk`.

:::tip
Normal files can also be formatted
(usually created by `fallocate` or `dd`)
and then mounted using `mount -o loop`.
:::

## Ext4

Example of creating an ext4 root partition on Linux:

```shell
mkfs.ext4 -L root /dev/nvme0n1p3
```

| Option | Description          |
| ------ | -------------------- |
| `-L`   | Set the volume name. |

## Swap

Example of creating a swap partition on Linux:

```shell
mkswap -L swap /dev/nvme0n1p2
```

| Option | Description          |
| ------ | -------------------- |
| `-L`   | Set the volume name. |

## FAT

Example of creating an UEFI boot partition:

```shell
mkfs.fat -F32 -nEFI /dev/nvme0n1p1
```

| Option | Description                        |
| ------ | ---------------------------------- |
| `-F`   | Select the FAT size: 12, 16 or 32. |
| `-n`   | Set the volume name.               |

## NTFS

Example of creating a NTFS partition,
usually for compability with Windows OS:

```shell
mkfs.ntfs -Q -L data /dev/sdXY
```

| Option                       | Description                  |
| ---------------------------- | ---------------------------- |
| `-f` `--fast` `-Q` `--quick` | Perform quick (fast) format. |
| `-L`                         | Set the volume name.         |
