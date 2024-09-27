---
title: Submodule
ref: https://man.archlinux.org/man/git-submodule.1.en
---

## Usage

```shell
git submodule COMMAND OPTIONS
```

| Command  | Option        | Description                                                   |
| -------- | ------------- | ------------------------------------------------------------- |
| `add`    |               | Add a new submodule.                                          |
| `init`   |               | Initialize (clone) new submodules, if any.                    |
| `status` |               | List submodules and their status.                             |
| `update` | `--init`      | Update and initialize submodules.                             |
| `update` | `--recursive` | Update submodules recursively (submodules inside submodules). |
| `update` | `--remote`    | Update submodules to the latest commit.                       |
| `update` |               | Update submodules.                                            |

## Example

Add a new submodule:

```shell
git submodule add git@github.com:url_to/submodule.git path_to_submodule
```

## Move submodule

```shell
git mv previous/submodule target/submodule
```

## Remove submodule

There is no single command for it,
so a small script is needed.

```shell
# Bash
SUBMODULE_PATH='path/to/submodule'
git submodule deinit -f ${SUBMODULE_PATH}; rm -rf .git/modules/${SUBMODULE_PATH}; git rm -f ${SUBMODULE_PATH}
```

```fish
# Fish
git submodule deinit -f (wl-paste); rm -rf .git/modules/(wl-paste); git rm -f (wl-paste)
```
