---
title: Metadata
ref: https://stackoverflow.com/questions/59279937/unable-to-overwrite-ffmpeg-metadata
---

## Clear metadata

Use `-map_metadata` (default global) with value of `-1`:

```shell
ffmpeg -i input.mp4 -map_metadata -1 output.mp4
ffmpeg -i input.mp4 -map_metadata:s -1 output.mp4
```

## Audio metadata

For each `KEY=VALUE` pair, use `-metadata` to set it (without options it defaults to global metadata).
You can also set metadata for a specific stream:

- `-metadata:g`: Global metadata
- `-metadata:s:0`: First stream metadata

```shell
ffmpeg -i without_metadata.opus \
  -codec copy \
  -metadata:s:0 title='My title' \
  -metadata:s:0 artist='Artist Name' \
  -metadata:s:0 album_artist='Album Image Creator' \
  -metadata:s:0 album='Album Name' \
  -metadata:s:0 date=2023 \
  -metadata:s:0 track=1 \
  -metadata:s:0 disc=1 \
  -metadata:s:0 composer='Composer Name' \
  with_metadata.opus
```

## Video metadata

- [Reference](https://stackoverflow.com/questions/44351606/ffmpeg-set-the-language-of-an-audio-stream)
- [ISO 639-2 codes for languages](https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes)

If a video has, for example, two audio streams,
you may want to add a language and a title to be shown in players.

```shell
-metadata:g title='Video Title' \
-metadata:s:1 language=jpn -metadata:s:1 title='First Audio Title' \
-metadata:s:2 language=mul -metadata:s:2 title='Second Audio Title' \
```

## Cover

### MP3

Use `-codec copy` to copy both audio and image as is.

```shell
ffmpeg -i music.mp3 -i Cover.jpg \
  -metadata:s:1 comment='Cover (front)' \
  -codec copy -map 0 -map 1 \
  music_with_cover.mp3
```

### Opus

Use `-acodec copy` to copy audio as is.
Image needs a different codec, so use `-vcodec theora -q:v 10`.

**Note:** Most music players cannot recognize this cover art.

```shell
ffmpeg -i music.opus -i Cover.jpg \
  -metadata:s:1 comment='Cover (front)' \
  -acodec copy -vcodec theora -q:v 10 -map 0 -map 1 \
  music_with_cover.opus
```
