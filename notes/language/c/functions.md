---
title: Functions
ref: https://www.programiz.com/c-programming/c-storage-class
---

## Usage

```c
#include <stdio.h>

/* Function prototype
   We declare its body later, but can use from now on. */
int sum_numbers(int a, int b);

void my_function() {
    printf("This is my function!\n");
}

int main() {
    int total;
    my_function();
    total = sum_numbers(10, 5);
    printf("Sum of 10 and 5 is %d", total);
    return 0;
}

int sum_numbers(int a, int b) {  // Function definition
    return a + b;
}
```

Using pointers:

```c
#include <stdio.h>

void swap_numbers(int *a, int *b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
}

int main() {
    int numA = 5, numB = 20;
    int *pointerA = &numA;
    int *pointerB;
    pointerB = &numB;
    printf("numA address %p with value %d\n", pointerA, numA);
    printf("numB address %p with value %d\n", pointerB, numB);
    swap_numbers(&numA, &numB);
    printf("numA address %p with value %d\n", pointerA, numA);
    printf("numB address %p with value %d\n", pointerB, numB);
    return 0;
}
```

### Storage class

Determines the scope, visibility and lifetime of variables.

```c
#include <stdio.h>

int global_variable = 10;  // Available everywhere, should be avoided

void some_function(int number) {
    static int call_count = 0;  // `static`: Value persists between calls
    printf("Argument is %d. This function was called %d times.\n", number, ++call_count);
}

int main() {
    if (1) {
        int local_variable = 5;         // Available only inside this block
        some_function(local_variable);  // OK, call_count becomes 1
    }
    some_function(local_variable);      // Error: Variable is not defined
    some_function(3);  // call_count becomes 2
    some_function(8);  // call_count becomes 3
    return 0;
}
```
