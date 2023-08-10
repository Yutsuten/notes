---
title: Computed observable
ref: https://knockoutjs.com/documentation/computedObservables.html
---

Computed observables are used when you need a variable that _depends_ on other variables.

```html
<input data-bind="value: firstName"></input>
<input data-bind="value: lastName"></input>

<script type="text/javascript">
function AppViewModel () {
  let self = this;
  self.firstName = ko.observable();
  self.lastName = ko.observable();
  self.fullName = ko.computed(function () {
    return self.firstName() + ' ' + self.lastName();
  });
}
ko.applyBindings(new AppViewModel());
```
