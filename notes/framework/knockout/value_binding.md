---
title: Value binding
ref: https://knockoutjs.com/documentation/value-binding.html
---

Bind the value with a property in your model.

```html
<input data-bind="value: firstName"></input>

<script type="text/javascript">
function AppViewModel () {
  this.firstName = ko.observable();
}
ko.applyBindings(new AppViewModel());
</script>
```

Values may be accessed on javascript with `this.firstName()` and
set with `this.firstName('John')`.
