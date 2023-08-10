---
title: Alsa
---

## Audio on both speaker and headphones

On laptops speaker and headphones may become the same sink in `pulseaudio`,
and separated by different ports.
To enable both at the same time, connect your headphones and change these alsa settings:

1. Disable Auto-Mute Mode
2. Unmute and increase volume of Speaker to 100%

Steps:

1. Run `alsamixer` in a terminal. Press `F6` and choose the sound card.
2. Move to Auto-Mute Mode and press DOWN to disable it.
3. Move to Speaker, press `M` to unmute and increase its volume to 100% using UP or PgUp.
