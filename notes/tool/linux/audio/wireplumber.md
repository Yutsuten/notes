---
title: Wireplumber
ref: https://pipewire.pages.freedesktop.org/wireplumber/testing.html#native-api-clients
---

## wpctl

```shell
wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%-
wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%+
wpctl set-volume @DEFAULT_AUDIO_SINK@ 50%

wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle
wpctl set-mute @DEFAULT_AUDIO_SINK@ 1
wpctl set-mute @DEFAULT_AUDIO_SINK@ 0

wpctl status
wpctl set-default 48
```
