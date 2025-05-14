---
title: Properties
---

## Common

### Positioning

```css
.positioning {
  display: block;
  position: relative;
  transform: translate(-50%, -50%);
  height: 0;
  width: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```

### Spacing

```css
.spacing {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  overflow: auto;
}
```

### Colouring

```css
.colouring {
  color: #FFF;
  background-color: #333;
  background: linear-gradient(to bottom, #FFF 0%, #000 100%);
  border-style: dotted;
  border-width: 3px;
  border-color: blue;
  border-radius: 3px;
  box-shadow: 0 0 0 #000;
  outline: unset;
  opacity: 0.5;
}
```

Image border:

```css
.bordered-image {
  -webkit-filter: drop-shadow(1px 1px 0.5px black)
                  drop-shadow(-1px 1px 0.5px black)
                  drop-shadow(1px -1px 0.5px black)
                  drop-shadow(-1px -1px 0.5px black);
  filter: drop-shadow(1px 1px 0.5px black)
          drop-shadow(-1px 1px 0.5px black)
          drop-shadow(1px -1px 0.5px black)
          drop-shadow(-1px -1px 0.5px black);

  /* Simpler */
  filter: drop-shadow(0 0 1px black) drop-shadow(0 0 1px black);
}
```

### Text and font

```css
.font {
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-decoration: none;
  white-space: pre-wrap; /* pre-line (enable new lines) */
  word-wrap: break-word;
}
```

Text border:

```css
.bordered-text {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-shadow: 0 0 1px black, 0 0 1px black;
  -webkit-text-stroke: 2px black;
}
```

Format text:

```css
.text-formatting {
  text-align: justify;
  text-justify: inter-word;
  text-indent: 1.5rem;
}
```

### Special

```css
.special {
  cursor: default;
  list-style-type: disclosure-closed;
  user-select: none;
}
```

## System color theme

- [Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

```css
.theme-a {
  background: #dca;
  color: #731;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #753;
    color: #dcb;
    outline: 5px dashed #000;
  }
}
```
