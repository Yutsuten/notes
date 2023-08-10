---
title: Homebrew
ref: https://docs.brew.sh/Manpage
---

## Usage

The Missing Package Manager for macOS (or Linux).

```shell
brew COMMAND OPTIONS FORMULA
```

| Command | Description |
| --- | --- |
| `install` | Install a formula. |
| `uninstall` | Uninstall a formula. |
| `update` | Fetch the newest version of Homebrew and all formulae. |
| `upgrade` | Upgrade outdated formulae. |
| `list` | List all installed formulae. |
| `autoremove` | Uninstall formulae that were only installed as a dependency of another formula and are now no longer needed. |
| `leaves` | List installed formulae that are not dependencies of another installed formula or cask. |
| `info` | Display brief statistics for your Homebrew installation. |

### List explicitly installed packages

```shell
brew leaves --installed-on-request
brew info --json=v2 --installed | jq -r '.formulae[]|select(any(.installed[]; .installed_on_request)).full_name'
```

## Install without root

Installing homebrew on linux without sudo and development tools seems to be possible
(haven't succeed yet, though).

### Requirements

Basically an usable `git` and `gcc` are needed.
If it is not installed already,
try copying the binaries from another server.

#### Git

Copy the git binary itself and its dependencies.

- libexec: `/usr/libexec/git-core`
- gitcore: `/usr/share/git-core`

After copying you will need to set some configuration to make the git use those "dependencies",
as probably you don't have sudo access,
it is on your home directory.

```shell
EXPORT GIT_EXEC_PATH=${HOME}/libexec/git-core
git config --global init.templateDir "${HOME}/share/git-core"
```

You may check if the exec path has been updated with `git --exec-path`.

Add git to the PATH and make homebrew use it.

```shell
export HOMEBREW_NO_ENV_FILTERING=1
```

#### Gcc

Maybe only copying the binary is enough.
Be sure to put it on the PATH.

### Install

Follow the instructions on the Homebrew website.
The objective here is to make it install newer `gcc` and `git`.

If you succeed on this,
probably you're free to install any package homebrew supports.
