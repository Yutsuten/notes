---
title: Basic
ref: https://shopify.github.io/liquid/basics/introduction/
---

## Syntax

To render objects or variables, use double curly braces.

```liquid
{{ page.title }}
```

for logic and flow control, use curly brace percentage delimiters.

```liquid
{% if user %}
  Hello {{ user.name }}!
{% endif %}
```
