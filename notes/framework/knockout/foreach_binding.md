---
title: Foreach binding
ref: https://knockoutjs.com/documentation/foreach-binding.html
---

Renders a list into your template.

Only the HTML _inside_ the foreach binding will be repeated.

```html
<tbody data-bind="foreach: people">
    <tr>
        <td data-bind="text: firstName"></td>
        <td data-bind="text: lastName"></td>
    </tr>
</tbody>

<script type="text/javascript">
function AppViewModel () {
    self.people = ko.observableArray([
        { firstName: 'Bert', lastName: 'Bertington' },
        { firstName: 'Charles', lastName: 'Charlesforth' },
        { firstName: 'Denise', lastName: 'Dentiste' }
    ]);
}
ko.applyBindings(new AppViewModel());
</script>
```
