---
title: Minted
arch: minted
ref: https://www.overleaf.com/learn/latex/Code_Highlighting_with_minted
---

## Example

```latex
\documentclass[10pt,a5paper]{article}
\usepackage[utf8]{inputenc}
\usepackage{minted}
\pagestyle{empty}
\begin{document}

\begin{minted}[frame=single,framesep=2mm]{py}
def greet(name):
  print(f'Hello {name}')
\end{minted}

\end{document}
```
