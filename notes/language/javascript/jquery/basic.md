---
title: Basic
ref: https://api.jquery.com/
---

A low level javascript library.

## Usage

Run code after the DOM is loaded.

```javascript
$(document).ready(function () {
  // Initialization code
});
```

### Selector functions

```javascript
// Get the number of selected items by the selector
$('.selector').length;
$('.selector').toArray();

// Loop results of a selector
$('.selector').each(function (index, element) {
  // Do something
});

// Add and remove class
$('.selector').addClass('selected');
$('.selector').removeClass('selected');
$('.selector').toggleClass('selected', true);

// Add and remove attributes
$('.selector').attr('disabled', '');
$('.selector').removeAttr('disabled');

// Selected radio box
$('input[name=group1]:checked').val()

// Events
$('select').change(function() {
  // Remove element in select
  $(this).find('option[value=""]').remove();
});

// Select: add/remove options
$('select').empty();
$('select').append($('<option>', {
  value: '',
  text: 'Select an option'
}));
```
