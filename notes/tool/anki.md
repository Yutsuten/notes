---
title: Anki
ref: https://github.com/ankitects/anki/blob/main/docs/development.md
---

## Pre-built Python wheels

The latest released Anki can be checked at
[PyPI](https://pypi.org/project/aqt/).
To install python from pre-built wheels, run:

```shell
pip install --user --upgrade aqt
```

The packages `pyqt6 pyqt6-webengine` are also needed.
Prefer your system's package manager to install it.

On newer Linux that upgraded `glibc`, start `anki` with either:

| Environment variable | Description |
| --- | --- |
| `QTWEBENGINE_CHROMIUM_FLAGS=--no-sandbox` | Use system Qt instead. |
| `DISABLE_QT5_COMPAT=1` | Force anki to run using Qt6. (2.1.50+) |

## Fcitx support

Find the system's and Anki's `platforminputcontexts` directory
and symlink the fcitx plugin.

### Qt5

```shell
ln -s /usr/lib/qt/plugins/platforminputcontexts/libfcitx5platforminputcontextplugin.so \
      ~/.local/lib/python3.10/site-packages/PyQt5/Qt5/plugins/platforminputcontexts
```

### Qt6

```shell
ln -s /usr/lib/qt/plugins/platforminputcontexts/libfcitx5platforminputcontextplugin.so \
      ~/.local/lib/python3.10/site-packages/PyQt6/Qt6/plugins/platforminputcontexts
```

## Build locally

Firstly clone anki repository from
[here](https://github.com/ankitects/anki)

### Install bazel

Anki requires a specific bazel version.
Check the required bazel version with:

```shell
cat .bazelversion
```

If the required bazel version is, for example, 5.0.0,
download `bazel-5.0.0-linux-x86_64` manually at the
[bazel release page](https://github.com/bazelbuild/bazel/releases).

To download from the command line, use:

```shell
curl --location --output ~/.local/bin/bazel "https://github.com/bazelbuild/bazel/releases/download/5.0.0/bazel-5.0.0-linux-x86_64"
```

Finally add execution permission to the binary:

```shell
chmod u+x ~/.local/bin/bazel
```

### Build and install anki

At least python 3.8 is required.

```shell
./tools/build
pip install --user --upgrade bazel-dist/*.whl
```

Anki then can be executed by typing `anki` on the terminal.

## LaTeX support

- [Official documentation](https://docs.ankiweb.net/math.html)

### Install

For code syntax highlight, install [minted](https://archlinux.org/packages/extra/any/minted/).

When compiling the LaTeX code, we will need the `-shell-escape` extra argument.
For that, install [Edit LaTeX build process](https://ankiweb.net/shared/info/937148547) add-on,
and update the arguments in its configuration file.
Add the argument for both PNG and SVG compilers.
Restart Anki.

### Configuration

Now we can focus on updating our LaTeX document.
Go to `Tools > Manage note types`, select the note type, click `Options`,
and update the header and footer.

#### > Header

```latex
\documentclass[10pt,a5paper]{article}
\usepackage[utf8]{inputenc}
\usepackage{minted}
\pagestyle{empty}
\begin{document}
```

#### > Footer

```latex
\end{document}
```

Check `Create scalable images with dvisvgm` to generate SVG instead of PNG.

### Usage

When editing cards, make sure to use the HTML editor, because Anki adds some HTML elements by default.
Those elements may cause LaTeX to fail to compile.

```latex
[latex]
\begin{minted}[frame=single,framesep=2mm]{py}
name = 'Tom'  # My name is Tom
\end{minted}
[/latex]
```
