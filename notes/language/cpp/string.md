---
title: String
ref: https://cplusplus.com/reference/string/string/
---

## Usage

```cpp
#include <string>
```

## Contains

Check if `text` contains `substr`:

```cpp
if (text.find(substr) != std::string::npos) {
    fmt::println("Substring found!");
} else {
    fmt::println("Substring not found!");
}
```

## Trim

**In place** whitespace trim of a `std::string`:

```cpp
const std::string WHITESPACE = " \n\r\t\f\v";

void ltrim(std::string &s) {
    s.erase(s.begin(), s.begin() + s.find_first_not_of(WHITESPACE));
}

void rtrim(std::string &s) {
    s.erase(s.begin() + s.find_last_not_of(WHITESPACE) + 1, s.end());
}

void trim(std::string &s) {
    ltrim(s);
    rtrim(s);
}
```

**Copy** of a `std::string` with the whitespace trimmed:

```cpp
const std::string WHITESPACE = " \n\r\t\f\v";

std::string ltrim(const std::string &s) {
    size_t start = s.find_first_not_of(WHITESPACE);
    return (start == std::string::npos) ? "" : s.substr(start);
}

std::string rtrim(const std::string &s) {
    size_t end = s.find_last_not_of(WHITESPACE);
    return (end == std::string::npos) ? "" : s.substr(0, end + 1);
}

std::string trim(const std::string &s) {
    size_t start = s.find_first_not_of(WHITESPACE);
    if (start == std::string::npos) {
        return "";
    }
    size_t end = s.find_last_not_of(WHITESPACE);
    return s.substr(start, end - start + 1);
}
```
