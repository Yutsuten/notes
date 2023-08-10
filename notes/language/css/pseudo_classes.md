---
title: Pseudo classes
---

## Selectors

Selects the `nth` child.
If the element specified doesn't match the child element (ex: `div`),
it won't select anything.

```css
:first-child
:last-child
:nth-child(n)
```

Selects the `nth` of the type.
If no element is specified before this pseudo class,
every first of type will be selected (ex: `h1`, `div`).

```css
:first-of-type
:last-of-type
:nth-of-type(n)
```

Selects every element that does not match the selector.

```css
:not(selector)
```

Pseudo-elements.

```css
::before
::after
::selection
```

### Scrollbar

```css
/* Scrollbar css */
::-webkit-scrollbar {
    width: 16px;
    border-color: #79a1b7;
}

::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: #b2cede;
}

::-webkit-scrollbar-thumb {
    width: 12px;
    background-color: #f2fbff;
    border-radius: 4px;
    border: 2px solid #b2cede;
}
```

## Examples

If the second child isn't a `div`, it won't select anything.

```css
.parent > div:nth-child(2) {
    background: blue;
}
```

Select the second `div`.

```css
.parent > div:nth-of-type(2) {
    background: blue;
}
```

Select even or odd.

```css
tr td:nth-child(even) {
    background-color: #fff;
}
tr td:nth-child(odd) {
    background-color: #ebf4f9;
}
```

Pseudo-elements content.

```css
h1::before {
    content: '- ';
}
a::after {  /* Using Font Awesome icon */
    font-family: "Font Awesome 5 Free";
    font-size: 0.8rem;
    font-weight: 900;
    display: inline-block;
    padding-left: 3px;
    vertical-align: middle;
    content: '\f35d';
}
```
