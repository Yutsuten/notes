---
title: CSV
ref: https://ruby.github.io/csv/
---

## Usage

Library that provides an interface to CSV files and data.

```rb
require 'csv'

CSV.foreach('path/to/file.csv', headers: true) do |row|
  puts row['name']
end
```
