---
title: Flow control
ref: https://devdocs.io/cpp/language/statements
---

## Condition

```cpp
if (10 > 5) {
    do_something();
} else if (flag) {
    flag_is_true();
} else {
    do_something_else();
}
```

## For loop

Classic:

```cpp
for (int i = 10; i >= 0; i--) {
    fmt::println("Countdown: {}", i);
}
```

Range-based:

```cpp
for (const auto &pair : my_dict) {
    fmt::println("{}: {}", pair.first, pair.second);
}
```

## While loop

```cpp
int price = 5;
while (price < 100) {
    if (price == 13) {
        price += 8;
        continue;  // Skip to next interation
    }
    if (price == 50) {
        break;  // Finish the loop now
    }
    fmt::println("I may buy it for ${}", price);
    price += 8;
}
fmt::println("${} is too expensive!", price);
```

## Do while loop

```cpp
int number;
fmt::println("Choose a number [0-10] inclusive");
do {
    fmt::print("Your choice: ");
    std::cin >> number;
    if (!std::cin) { // same as `std::cin.fail()`
        std::cin.clear(); // Reset the error state
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); // Clear input buffer
        number = -1;
    }
} while (number < 0 || number > 10);
```

## Switch

```cpp
int choice;
fmt::print("Choose 1 or 2: ");
std::cin >> choice;
if (!std::cin) {
    std::cin.clear();
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
    choice = 0;
}
switch (choice) {
    case 1:
        fmt::println("You chose the number 1.");
        break;
    case 2:
        fmt::println("You chose the number 2.");
        break;
    default:
        fmt::println("Not a valid choice.");
}
```

## Goto

```cpp
goto skip_warning;
fmt::println("You shouldn't be using goto, you know.");
skip_warning:
fmt::println("End of the program.");
```
