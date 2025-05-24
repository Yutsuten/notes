---
title: Fmt
ref: https://fmt.dev/11.1/api/
---

## Compilation

Add `-lfmt` to the compiler flags (gcc) to be able to use `fmt` in the program.

## Usage

For the simplest usage, include `fmt/base.h`:

```cpp
#include <fmt/base.h>

int main()
{
    fmt::print("My name is {}, I'm {} years old.", "Tom", 25);
    return 0;
}
```

Debug arrays/vectors by including `fmt/ranges.h`:

```cpp
#include <fmt/ranges.h>
#include <vector>

int main()
{
    int numbers[] = {30, 35, 40, 45, 50};
    std::vector<char> letters = {'a', 'c', 'f'};
    fmt::print("{}\n", numbers);
    fmt::print("{}\n", letters);
    return 0;
}
```
