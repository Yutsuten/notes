---
title: Bookmarks
---

## Shortcuts

| Action | Shortcut |
| ------ | -------- |
| Add | `Ctrl+D` |
| Organize | `Ctrl+Shift+O` |
| Sidebar | `Ctrl+B` |

## Run javascript on bookmark

Add a bookmark with the following content on the URL:

```js
javascript:var main = function(){ doSomething(); }()
```

### Example

Pretty-print a page with JSON content.

```js
javascript:var main = function(){ document.getElementsByTagName('pre')[0].textContent = JSON.stringify(JSON.parse(document.getElementsByTagName('pre')[0].textContent), null, 2); }()
```

## Show bookmarks bar only on new tab

- [Creating userChrome.css](https://www.userchrome.org/how-create-userchrome-css.html)
- [File contents](https://www.reddit.com/r/FirefoxCSS/comments/7evwow/show_bookmarks_toolbar_only_on_new_tab/)

1. Type `about:support` in the address bar
2. Find the Profile Folder row and click `Open Folder`
3. Create a new folder named `chrome`
4. Create `userChrome.css` inside the `chrome` folder

```css
##main-window #PersonalToolbar {
  visibility: collapse !important;
}
##main-window[title^="about:newtab"] #PersonalToolbar,
##main-window[title^="New Tab"] #PersonalToolbar,
##main-window[title^="Nightly"] #PersonalToolbar,
##main-window[title^="Mozilla Firefox"] #PersonalToolbar,
##main-window[title^="Firefox"] #PersonalToolbar {
  visibility: visible !important;
}
```
