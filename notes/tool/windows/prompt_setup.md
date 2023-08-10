---
title: Prompt setup
---

## Change default user

```shell
debian config --default-user root  # Replace debian with OS if necessary
```

## Personalization

- [Make Bash on Ubuntu on Windows 10 Look Like the Ubuntu Terminal](https://medium.com/@jgarijogarde/make-bash-on-ubuntu-on-windows-10-look-like-the-ubuntu-terminal-f7566008c5c2)
- [Solarized colors for vim in bash on windows works!](https://www.reddit.com/r/bashonubuntuonwindows/comments/60da1u/solarized_colors_for_vim_in_bash_on_windows_works/)
- [Solarized Cheat Sheet](http://www.zovirl.com/2011/07/22/solarized_cheat_sheet/)
- [Powerline fonts](https://medium.com/@slmeng/how-to-install-powerline-fonts-in-windows-b2eedecace58)

### Workarounds

- [Can't set different font for the terminal](https://github.com/Microsoft/WSL/issues/757)

```txt
Run->regedit
HKEY_CURRENT_USER\Console\%SystemRoot%_system32_bash.exe
add/modify item CodePage->(DWORD)FDE9(65001)
```

### Hide scroll bar

- [Reference](https://github.com/Microsoft/WSL/issues/407#issuecomment-295761589)

Make the default settings for the initial window's Screen Buffer Size and Window Size to be the same
value.

### Fullscreen mode

```txt
Alt+Shift+Enter
```

## Solarized theme

```txt
SLOT SOLARIZED  HEX      RGB             HSB            L*A*B          16/8   TERMCOL   XTERM/HEX
0    base02     #073642  7    54   66    192  90   26   20  -12  -12   0/4    black     235  #262626
1    blue       #268bd2  38   139  210   205  82   82   55  -10  -45   4/4    blue      33   #0087ff
2    green      #859900  133  153  0     68   100  60   60  -20  65    2/2    green     64   #5f8700
3    cyan       #2aa198  42   161  152   175  74   63   60  -35  -05   6/6    cyan      37   #00afaf
4    red        #dc322f  220  50   47    1    79   86   50  65   45    1/1    red       160  #d70000
5    magenta    #d33682  211  54   130   331  74   83   50  65   -05   5/5    magenta   125  #af005f
6    yellow     #b58900  181  137  0     45   100  71   60  10   65    3/3    yellow    136  #af8700
7    base2      #eee8d5  238  232  213   44   11   93   92  -00  10    7/7    white     254  #e4e4e4
8    base03     #002b36  0    43   54    193  100  21   15  -12  -12   8/4    brblack   234  #1c1c1c
9    base0      #839496  131  148  150   186  13   59   60  -06  -03   12/6   brblue    244  #808080
10   base01     #586e75  88   110  117   194  25   46   45  -07  -07   10/7   brgreen   240  #585858
11   base1      #93a1a1  147  161  161   180  9    63   65  -05  -02   14/4   brcyan    245  #8a8a8a
12   orange     #cb4b16  203  75   22    18   89   80   50  50   55    9/3    brred     166  #d75f00
13   violet     #6c71c4  108  113  196   237  45   77   50  15   -45   13/5   brmagenta 61   #5f5faf
14   base00     #657b83  101  123  131   195  23   51   50  -07  -07   11/7   bryellow  241  #626262
15   base3      #fdf6e3  253  246  227   44   10   99   97  00   10    15/7   brwhite   230  #ffffd7
```
