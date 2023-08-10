---
title: Class
---

```php
class Person {
    public $property;
    const constantVariable = 10; // Value cannot be changed
    public static staticVariable = 50; // Accessible without instantiating

    public function __construct($parameters) {
        $this->property = $parameters;
    }

    public function helloWorld() {
        return "Hello World";
    }
}
Class Worker extends Person {}
$me = new Person("Hello");

echo $me->helloWorld();
Person::constantVariable // Returns the value of constantVariable

is_a($classInstance, "ClassName"); // true or false
property_exists($classInstance, "propertyName");
method_exists($classInstance, "methodName");

class Square extends Shape {}
```
