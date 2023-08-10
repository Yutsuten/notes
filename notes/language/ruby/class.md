---
title: Class
---

```ruby
class BaseClass
  include Math  # Variables and methods are inherited to class instances
  extend Math  # Variables and methods are inherited to the class itself

  attr_reader :name
  attr_writer :name
  attr_accessor :name  # Both read and write
  def initialize(name)
    @name = name
  end

  def do_something(param1, param2=true)
    # ...
  end

  def BaseClass.class_method
    # ...
  end

  public
  def my_public_method
    # ...
  end

  private
  def my_private_method
    # ...
  end
end

instance = MyClass.new("Taro")

## Inheritance
class DerivedClass < BaseClass
  # Some stuff!
  def do_something(param1, param2)
    super(param1, param2)
    # ...
  end
end
```
