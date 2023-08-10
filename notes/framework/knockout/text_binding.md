---
title: Text binding
ref: https://knockoutjs.com/documentation/text-binding.html
---

Bind to the text of an HTML element.

```html
<span data-bind="text: myMessage"></span>

<script type="text/javascript">
function AppViewModel () {
    self.myMessage = ko.observable('Hello world!');
}
ko.applyBindings(new AppViewModel());
```
