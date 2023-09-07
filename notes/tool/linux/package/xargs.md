---
title: Xargs
man: xargs
---

## Usage

Build and execute command lines from standard input.

```shell
xargs OPTIONS COMMAND
```

| Option | Description |
| --- | --- |
| `-0` `--null` | Input items are terminated by a null character instead of by whitespace. |
| `-d` `--delimiter` | Input items are terminated by the specified character. |
| `-n` `--max-args` | Use at most max-args arguments per command line. |
| `-P` `--max-procs` | Run up to *max-procs* processes at a time; the default is 1. |
| `-p` `--interactive` | Prompt the user about whether to run each command line and read a line from the terminal. |
| `-r` `--no-run-if-empty` | If the standard input does not contain any nonblanks, do not run the command. |
| `-I` | Pass arguments in the middle of a command. Delimiter becomes `\n` instead of space. |

## Examples

Create three files.

```shell
echo 'one two three' | xargs touch
```

Randomize file names.

```shell
printf '%s\n' * | shuf | xargs -rd '\n' sxiv
printf '%s\0' * | shuf -z | xargs -r0 sxiv
```

Move files using filenames written in a file.

```shell
xargs -rI % mv "All/%" . < ~/move.txt
```

Check if musics in playlist exist.

```shell
xargs -d '\n' file < playlist.m3u8 | grep 'cannot open'
```
