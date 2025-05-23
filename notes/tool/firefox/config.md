---
title: Config
---

## Improving defaults

Configuration is on `about:config`.

| Key                                         | Value   | Description                                             |
| ------------------------------------------- | ------- | ------------------------------------------------------- |
| `browser.display.focus_ring_width`          | `0`     | Border shown when pressing TAB.                         |
| `layout.word_select.eat_space_to_next_word` | `false` | Don't select extra space.                               |
| `network.captive-portal-service.enabled`    | `false` | Disable if it is annoying (on some internet providers.) |
| `keyword.enabled`                           | `false` | Disable search engine on address bar.                   |
| `browser.tabs.closeWindowWithLastTab`       | `false` | Keep browser open even if closing the last tab.         |
| `browser.fullscreen.autohide`               | `false` | Keep URL and toolbar visible even while fullscreen.     |

## Default application

To open links, PDFs and other files using `firefox` by default, run:

```shell
xdg-mime default firefox.desktop x-scheme-handler/http
xdg-mime default firefox.desktop x-scheme-handler/https
xdg-mime default firefox.desktop x-scheme-handler/chrome
xdg-mime default firefox.desktop text/html
xdg-mime default firefox.desktop application/pdf
xdg-mime default firefox.desktop application/x-extension-htm
xdg-mime default firefox.desktop application/x-extension-html
xdg-mime default firefox.desktop application/x-extension-shtml
xdg-mime default firefox.desktop application/xhtml+xml
xdg-mime default firefox.desktop application/x-extension-xhtml
xdg-mime default firefox.desktop application/x-extension-xht
```

## Shortcut list

Learn some shortcuts [here](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly?redirectslug=Keyboard+shortcuts&redirectlocale=en-US).

| Shortcut | Description       |
| -------- | ----------------- |
| `F11`    | Toggle fullscreen |
