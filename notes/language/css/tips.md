---
title: Tips
---

## Layout

### Page

```html
<div class="wrapper">
  <div class="header"></div>
  <div class="body"></div>
  <div class="footer"></div>
</div>
```

```css
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.wrapper {
  min-height: 100%;
  position: relative;
}
.header {}
.body {
  padding-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
}
```

Similar, but using flexbox:

```html
<div class="contents">
  <div class="flex">
    <div class="header"></div>
    <div class="body"></div>
    <div class="footer"></div>
  </div>
</div>
```

```css
.contents {
  display: contents;
}
.flex {
  display: flex;
  flex-direction: column;
}
.header {}
.body {
  flex-grow: 1;
}
.footer {
  flex-basis: 60px;
}
```

### Sticky overlay

A scroll-enabled div with a "fixed" container in it. [CodePen](https://codepen.io/waterplea/pen/JjjMXzR)

```html
<div class="scrollable">
  <div class="sticky">
    <button class="overlay">
      I'm like fixed inside scrolling container!
    </button>
  </div>
  <div class="paragraph">
    A lot of text.
  </div>
</div>
```

```css
.scrollable {
  position: relative;
  width: 300px;
  height: 300px;
  background: skyblue;
  overflow: auto;
}

.sticky {
  position: sticky;
  top: 0;
  left: 0;
  height: calc(100% - 1px);
  width: calc(100% - 1px);
  float: left;  
  margin-right: -100%;
  pointer-events: none;
}

.overlay {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  white-space: nowrap;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: pink;
  outline: none;
  pointer-events: auto;
  transition: background .3s;
}

.overlay:hover {
  background: lightpink;
}

.overlay:active {
  background: hotpink;
}

.paragraph {
  padding: 12px;
  width: 150%;
}
```

## Element

### Table

Remove space between cells:

```css
table {
  border-spacing: 0;
  border-collapse: collapse;
}
```

Add horizontal scroll:

```css
table {
  display: block;
  max-width: fit-content;
  overflow-x: auto;
}
```

### Button

Removing button focus CSS:

```css
button:focus {
  outline: unset;
}
```

### Input

Change placeholder color

```css
::placeholder {
  color: red;
  opacity: 1;
}
```
