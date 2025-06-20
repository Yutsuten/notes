---
title: Split
ref: https://github.com/nathancahill/Split.js
---

## Sample

### HTML

```html
<div class="wrapper">
    <div id="one">#one</div>
    <div id="two">#two</div>
</div>
```

### CSS

```css
.wrapper {
    background-color: gray;
    height: 400px;
}
##one {
    background-color: blue;
}
##two {
    background-color: green;
}
.gutter {
    background-color: black;
}
.gutter.gutter-vertical {
    cursor: ns-resize;
}
```

### Javascript

```javascript
Split(['#one', '#two'], {
    direction: 'vertical'
});
```
