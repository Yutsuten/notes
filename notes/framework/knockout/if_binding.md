---
title: If binding
ref: https://knockoutjs.com/documentation/if-binding.html
---

Conditionally add or remove sections of HTML.

```html
<div data-bind="if: displayMessage">A message.</div>

<script type="text/javascript">
function AppViewModel () {
    self.displayMessage = ko.observable(false);
}
ko.applyBindings(new AppViewModel());
</script>
```

## If not

```html
<div data-bind="ifnot: hideMessage">A message.</div>
```

## Containerless rendering

```html
<!-- ko if: someExpressionGoesHere -->
<li>I want to make this item present/absent dynamically</li>
<!-- /ko -->
```
