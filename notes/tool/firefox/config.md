---
title: Config
---

## Improving defaults

Configuration is on `about:config`.

| Key | Default | Value | Description |
| --- | ------- | ----- | ----------- |
| `browser.cache.disk.smart_size.enabled` | `False` | `True` | |
| `browser.cache.disk.capacity` | `1048576` | `X (KiB)` | |
| `browser.display.focus_ring_width` | `1` | `0` | |
| `browser.startup.page` | `1` | `0` | |
| `browser.urlbar.clickSelectsAll` | `False` | `True` | |
| `browser.urlbar.doubleClickSelectsAll` | `True` | `False` | |
| `layout.word_select.eat_space_to_next_word` | `True` | `False` | |
| `network.captive-portal-service.enabled` | `True` | `False` | |
| `widget.content.allow-gtk-dark-theme` | `False` | `True` | |
| `widget.content.gtk-theme-override` | | `Adwaita:light` | |
| `privacy.webrtc.legacyGlobalIndicator` | `True` | `False` | Microphone/webcam indicator |

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
