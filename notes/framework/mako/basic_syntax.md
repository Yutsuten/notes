---
title: Basic syntax
update: 2021-06-11
---

On module level:

```txt
<%! from babel import Locale %>
```

On template level:

```txt
<% locale = Locale('en', 'US') %>
${locale.territories['US']}
```

Using control structures:

```txt
% if x == 5:
  some output
% endif
```
