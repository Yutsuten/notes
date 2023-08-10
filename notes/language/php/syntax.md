---
title: Syntax
---

## Array operations

```php
$myAssocArray = array(
    'year' => 2012,
    'colour' => 'blue',
    'doors' => 5);
```

## Built-in functions

```php
echo "Message";
print "Message";

count($array);
sort($array);
rsort($array);
array_push($array, newElement);
join(":", $array);

rand();
rand(0, 10);
round(3.5);
round(3.555, 1);

strtoupper($string);
strtolower($string);
substr($string, index, size);
```

## For loop

```php
foreach($asscArray as $value) {
    // Some code
}

foreach($array as $key=>$value) {
    // Some code
}
```

## Function

```php
function($parameter) {
    return 10;
}

final public function(){} // Cannot be overridden
```
