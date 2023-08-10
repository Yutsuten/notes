---
title: Shortcut
---

To open Linux application through Windows shortcut,
first create a vbs script to launch the application.

Replace `xfce4-terminal; read` with `i3` if applicable.

```vb
args = "-c" & " -l " & """cd && xfce4-terminal; read"""
WScript.CreateObject("Shell.Application").ShellExecute "bash", args, "", "open", 0
```

Create a shortcut to open the vbs file.
Binary is `C:\Windows\System32\wscript.exe`.

Then add a nice icon!
