---
title: Regex
ref: https://cplusplus.com/reference/regex/
---

## Usage

```cpp
#include <regex>
```

## Match

Check for a **full match** (returns `bool`):

```cpp
std::string text = "Welcome";
std::regex pattern("[A-Za-z]+");

if (std::regex_match(text, pattern)) {
    fmt::println("Match found!");
} else {
    fmt::println("Match not found.");
}
```

Check for a **partial match** (returns `bool`):

```cpp
std::string text = "Code coverage is 87.49%";
std::regex pattern("\\d{2}\\.\\d{2}%");

if (std::regex_search(text, pattern)) {
    fmt::println("Match found!");
} else {
    fmt::println("Match not found.");
}
```

To get the value of the matched text,
use a `std::smatch` variable as the second parameter.

```cpp
std::string text = "Code coverage is 87.49%";
std::regex pattern("\\d{2}\\.\\d{2}%");
std::smatch match;

if (std::regex_search(text, match, pattern)) {
    fmt::println("Match found! It is {}", match.str());
} else {
    fmt::println("Match not found.");
}
```

To get the value of **capture groups** is pretty much the same code structure:

```cpp
std::string text = "My name is Tom, I'm 25 years old";
std::regex pattern("My name is ([A-Za-z]+), I'm ([0-9]+) years old");
std::smatch match;

if (std::regex_search(text, match, pattern)) {
    fmt::println("Full match: {}", match[0].str());
    fmt::println("Capture group 1: {}", match[1].str());
    fmt::println("Capture group 2: {}", match[2].str());
} else {
    fmt::println("Match not found.");
}
```

## Replace

Using [regex replace](https://cplusplus.com/reference/regex/regex_replace/)
to create a copy of a `std::string` with the whitespace trimmed:

```cpp
std::string ltrim(const std::string &s) {
    return std::regex_replace(s, std::regex("^\\s+"), std::string(""));
}

std::string rtrim(const std::string &s) {
    return std::regex_replace(s, std::regex("\\s+$"), std::string(""));
}

std::string trim(const std::string &s) {
    return ltrim(rtrim(s));
}
```
