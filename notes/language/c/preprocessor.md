---
title: Preprocessor
ref: https://www.programiz.com/c-programming/c-preprocessor-macros
---

## Usage

Include:

```c
#include <stdio.h>
```

Define variables and functions:

```c
#define PI 3.1415
#define circle_area(r) PI * r * r

int main() {
    printf("Radius of 2 has area of %.2f\n", PI * 2 * 2);
    printf("Radius of 3 has area of %.2f\n", circle_area(3));
    printf("Some predefined macros:\n");
    printf("Date: %s\n", __DATE__);  // A string containing the current date.
    printf("Time: %s\n", __TIME__);  // A string containing the current time.
    printf("File: %s\n", __FILE__);  // A string containing the file name.
    printf("Line: %d\n", __LINE__);  // An integer representing the current line number.
    printf("ANSI: %d\n", __STDC__);  // If follows ANSI standard C, then the value is a nonzero integer.
    return 0;
}
```

Conditional compilation (`#if`, `#elif`, `#else`, `endif`, `#ifdef`, `#defined`):

```c
#if OS == "windows"
    // Windows code
#elif OS == "linux"
    // Linux code
#else
    // Fallback code
#endif

#ifdef DEBUG
    // Debug code
#endif

#if defined BUFFER_SIZE && BUFFER_SIZE >= 2048
    // Big buffer code
#endif
```
