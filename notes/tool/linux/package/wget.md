---
title: Wget
man: wget
---

## Usage

```shell
wget OPTIONS URL
```

| Option | Description |
| --- | --- |
| `-nv` `--no-verbose` | Disable verbose output. |
| `-N` `--timestamping` | Do not download again if file already exists and have newer/same timestamp. |
| `-P` `--directory-prefix` | Directory to save the file. If the directory doesn't exist, it will be created. |
| `--show-progress` | Show progress even when disabling verbose output. |
| `--output-document` | Concatenate and write all content into the specified filename. |

## Example

Download / update `osu!` saved at `~/.local/games/osu/osu.AppImage`.

```shell
wget -nv -NP ~/.local/games/osu/ --show-progress 'https://github.com/ppy/osu/releases/latest/download/osu.AppImage'
```
