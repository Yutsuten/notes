---
title: Module
---

## Basic

Unlike classes, instances cannot be created,
and cannot have subclasses.

```ruby
require 'module'  # Python-like
include 'module'  # C-like

module Circle
  PI = 3.141592653589793
  def Circle.area(radius)
    PI * radius**2
  end
end

Circle::PI
```
