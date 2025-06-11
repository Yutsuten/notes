---
title: Array
ref: https://devdocs.io/cpp-containers/
---

## Vectors

Creating [vectors](https://devdocs.io/cpp/container/vector)
and optionally debugging (by including `fmt/ranges.h`):

```cpp
#include <vector>

int main()
{
    // Initialization
    std::vector<int> numbers;
    numbers.push_back(2);
    numbers.push_back(3);
    numbers.push_back(5);
    std::vector<char> letters = {'a', 'c', 'f'};

    // Debug
    fmt::print("{}\n", numbers);
    fmt::print("{}\n", letters);
    return 0;
}
```

:::tip
Use `.reserve(size)` to request a custom capacity
(good to avoid multiple reallocations).
:::

## Manual dynamic array

Use the `new` keyword to create a new array dinamically.
Don't forget to `delete` it.

```cpp
#include <fmt/ranges.h>

int main()
{
    // Initialization
    size_t size = 3;
    int* numbers = new int[size];
    numbers[1] = 99;

    // Debug
    fmt::print("[{}]\n", fmt::join(numbers, numbers + size, ", "));
    delete[] numbers;
    return 0;
}
```

It may be a good idea to use a Smart Pointer.
In this case there is no need to `delete` it.

Debugging its contents is a bit more verbose (if not using `c++20` features).

```cpp
#include <fmt/base.h>
#include <memory>

int main()
{
    // Initialization
    size_t size = 3;
    auto numbers = std::make_unique<int[]>(size);
    numbers[1] = 99;

    // Debug
    fmt::print("[");
    for (size_t i = 0; i < size - 1; ++i) {
        fmt::print("{}, ", numbers[i]);
    }
    fmt::print("{}]\n", numbers[size - 1]);
    return 0;
}
```

## Deques

[Deques](https://devdocs.io/cpp/container/deque)

## Lists

[Lists](https://devdocs.io/cpp/container/list)

## Forward list

[Forward list](https://devdocs.io/cpp/container/forward_list)

## Array

[Array](https://devdocs.io/cpp/container/array)
