---
title: ReplayGain
ref: https://wiki.hydrogenaud.io/index.php?title=ReplayGain
---

## Metadata only

A general tool that can be used with any audio format is
[rsgain](https://github.com/complexlogic/rsgain).

For specific audio formats ([reference](https://askubuntu.com/questions/106632/adding-replaygain-tags)):

- **vorbisgain**: `vorbisgain -a *.ogg`
- **metaflac**: `metaflac --add-replay-gain *.flac`
- **mp3gain**: `mp3gain -a *.mp3`

## Changing audio

Using this [superuser](https://superuser.com/questions/323119/how-can-i-normalize-audio-using-ffmpeg)
answer as reference,
some useful audio filters are:

- `loudnorm`
- `dynaudnorm`
- `speechnorm`

If all you want is to detect the current volume:

```shell
ffmpeg -i video.avi -af "volumedetect" -vn -sn -dn -f null /dev/null
```

Then based on the *mean_volume* and *max_volume*,
apply the `volume` [audio filter](/tool/ffmpeg/editing?search=ffmpeg#volume).
