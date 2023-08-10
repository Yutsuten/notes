---
title: Compiling
---

## PDF

A PDF file with the same will be generated in the same directory.

```shell
pdflatex -shell-escape test.tex
```

## Image

Compile the `.tex` file to generate a `.dvi` file:

```shell
latex -shell-escape test.tex
```

Pass the `.dvi` file to any of the below commands to generate the image in the format desired.

| Format | Example command |
| --- | --- |
| PNG | `dvipng -D 200 -T tight test.dvi -o test.png` |
| SVG | `dvisvgm --no-fonts -Z 2 test.dvi -o test.svg` |
