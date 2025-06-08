---
title: Dictionary
ref: https://cplusplus.com/reference/stl/
---

## Basic

Includes:

```cpp
#include <unordered_map>
#include <map>
```

Instantiate:

```cpp
std::unordered_map<std::string, int> my_unordered_map;
std::map<std::string, int> my_ordered_map = {
    {"first", 4},
    {"second", 11},
};
```

Access values:

```cpp
auto value = my_dict["first"];
```

Adding new key/value pairs:

```cpp
my_dict["first"] = 3;
my_dict["second"] = 10;
```

Delete a key/value pair:

```cpp
my_dict.erase("first");
```

Get number of key/value pairs:

```cpp
my_dict.size();
```

Loop all key/value pairs:

```cpp
for (const auto &pair : my_dict) {
    fmt::println("{}: {}", pair.first, pair.second);
}

// Can also be written as:
for (auto it = my_dict.begin(); it != my_dict.end(); ++it) {
    fmt::println("{}: {}", it->first, it->second);
}
```

## Methods

| Method | Description                                                             |
| ------ | ----------------------------------------------------------------------- |
| `find` | Takes a key and tries to locate the element with which the key matches. |
| `end`  | Iterator that points one past the last element.                         |

Check if a dictionary contains a key:

```cpp
if (my_dict.find("first") != my_dict.end()) {
    fmt::println("first found!");
}
```
