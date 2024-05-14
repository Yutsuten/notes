---
title: Playerctl
ref: https://wiki.archlinux.org/index.php/MPRIS
arch: playerctl
man: playerctl
---

## Controls

```shell
playerctl play-pause
playerctl next
playerctl previous
```

## Metadata

```shell
playerctl metadata --format 'Title  : {{title}}
Artist : {{artist}}
Album  : {{album}}'
```

You can also create a `~/.config/playerctl/metadata-format.txt` file using some cool icons:

```txt
  {{title}}
  {{artist}}
  {{album}}
```

Then use it like this:

```fish
playerctl metadata --format "$(cat ~/.config/playerctl/metadata-format.txt)"
```
