---
title: Form
---

## Basic

```html
<form method="post" action="/some/url">
  <!-- Input number -->
  <input type="number" name="myNumber" value="100" />

  <!-- Radio box -->
  <input type="radio" name="group1" id="yes" value="yes" checked />
  <label for="yes">Yes</label>
  <input type="radio" name="group1" id="no" value="no" />
  <label for="no">No</label>

  <!-- Submit button -->
  <input type="submit" value="Apply" />
</form>
```

## With validation

```html
<form method="post" action="/some/url">
  <input type="number" name="myNumber" value="100" min="1" required
         oninvalid="this.setCustomValidity('Custom error message')"
         oninput="setCustomValidity('')" />
  <input type="submit" value="Apply" />
</form>
```
