---
title: Click binding
ref: https://knockoutjs.com/documentation/click-binding.html
---

Add an event handler when an element is clicked.

```html
<button data-bind="click: btnClicked">Submit</button>

<script type="text/javascript">
function AppViewModel () {
  this.btnClicked = function () {};
}
ko.applyBindings(new AppViewModel());
</script>
```

## Prevent event bubbling

```html
<div data-bind="click: myDivHandler">
    <button data-bind="click: myButtonHandler, clickBubble: false">Click me</button>
</div>
```
