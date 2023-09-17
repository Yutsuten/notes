---
title: Base template
ref: https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
---

## Best practices

[W3C Validator](https://validator.w3.org/nu/)

| Tag | Description | Reference |
| --- | --- | --- |
| `lang` | Syntax: `<lang>-<region>`, where only lang is required. | [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang), [lang lookup](https://r12a.github.io/app-subtags/) |

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="/static/index.css">
    <title>Site Name</title>
  </head>
  <body>
    <header></header>
    <nav></nav>
    <article>
      <h1>Article title</h1>
      <section>
        <h2>First section</h2>
      </section>
      <section>
        <h2>Second section</h2>
      </section>
    </article>
    <aside></aside>
    <footer></footer>
    <script src="/static/index.js"></script>
  </body>
</html>
```
