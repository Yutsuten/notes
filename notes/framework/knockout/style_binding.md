---
title: Style binding
ref: https://knockoutjs.com/documentation/style-binding.html
---

Directly add CSS styles into HTML elements.

```html
<span data-bind="style: {color: elemColor}">

<script type="text/javascript">
function AppViewModel () {
    self.elemColor = 'blue';
}
ko.applyBindings(new AppViewModel());
</script>
```
