---
title: Find
man: find
---

## Usage

```shell
find LOCATION OPTIONS
```

| Option | Description |
| --- | --- |
| `-mindepth` | Minimum depth to search for files/directories. Default 0. |
| `-maxdepth` | Maximum depth to search for files/directories. Default is unlimited depth. |
| `-name` | Base of file name to be matched. |
| `-iname` | Like `-name`, but the match is case insensitive. |
| `-type` | File type to be matched. `d` for directory, `f` for file, `l` for symbolic link. |
| `-empty` | File is empty and is either a regular file or a directory. |
| `-o` `-or` | Logical OR. |
| `-not` `!` | Negates the next condition. |
| `(` `)` | Force precedence. Usually you need to escape them on the shell. |
| `-delete` | Delete files (make sure to put it last). |
| `-print` `-fprint` | Print the full file name on the standard output. |
| `-print0` `-fprint0` | Print the exact filename separated by `\0`. |
| `-exec` | Execute a command instead of printing. `;` 1 match 1 run; `+` X matches 1 run (like `xargs`) |

## Examples

Find files by name:

```shell
find . -name "*.js"
```

Find and delete empty directories:

```shell
find . -type d -empty -delete
```

Exclude hidden folders from search:

```shell
find . -not -path '*/.*'
```

Delete all but:

```shell
find . -mindepth 1 -maxdepth 1 -not \( -name 'filename1' -or -name 'filename2' \) -delete
```

List all image files separated by `\0`:

```shell
find . -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.webp' -o -iname '*.gif' \) -print0
```

Run `file` on every file in or below the current directory:

```shell
find . -type f -exec file '{}' \;
```

Rename multiple files (does not work if the path have spaces):

```shell
find . -type f -name '*.robot' | sed -E 'p;s/([a-z_]).robot/\1.resource/g' | xargs -n 2 mv
find . -type f -name 'Screenshot_*_*.png' | sed -E 'p;s/Screenshot_([0-9]{4})([0-9]{2})([0-9]{2})_([0-9]{2})([0-9]{2})([0-9]{2})([0-9]+)\.png/Screenshot_\1-\2-\3T\4:\5:\6.\7.png/g' | xargs -n 2 mv
```
