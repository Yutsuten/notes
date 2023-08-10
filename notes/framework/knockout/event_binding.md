---
title: Event binding
ref: https://knockoutjs.com/documentation/event-binding.html
---

## Get file

```html
<input type="file" data-bind="event: {change: function () {loadFile($element.files[0])}}" />

<script type="text/javascript">
function AppViewModel () {
  self.file = null;
  self.loadFile = function (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      self.file = e.target.result;
    }
    reader.readAsText(file);
  }
}
ko.applyBindings(new AppViewModel());
</script>
```
