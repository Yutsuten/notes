---
title: Stdlib
ref: https://www.programiz.com/c-programming/c-dynamic-memory-allocation
---

## Dynamic memory allocation

| Function | Description |
| --- | --- |
| `malloc(n_bytes)` | Memory allocation. Takes the number of bytes. |
| `calloc(n_el, n_bytes)` | Contiguous allocation. Takes the number of elements and the number of bytes for each element. |
| `realloc(ptr, n_bytes)` | Memory reallocation. Takes the pointer of a dynamically allocated memory and the new number of bytes. |
| `free(ptr)` | Releases memory. Takes the pointer of a dynamically allocated memory. |

```c
#include <stdio.h>
#include <stdlib.h>

void dump_array(int array[], int size) {
    for (int i = 0; i < size; i++) {
        printf(" %d", array[i]);
    }
    printf("\n\n");
}

void validate_pointer(int *list) {
    if (list == NULL) {
        printf("Failed to allocate memory!");
        exit(0);
    }
}

int main() {
    printf("malloc leaves the memory unitialized\n");
    int *dynamic_list = (int*) malloc(10 * sizeof(int));
    validate_pointer(dynamic_list);
    for (int i = 0; i < 10; i++) {
        dynamic_list[i] = (i + 1) * 2;
    }
    dump_array(dynamic_list, 10);

    printf("calloc initializes all bits with zero\n");
    int *dynamic_list_zero = (int*) calloc(10, sizeof(int));
    validate_pointer(dynamic_list_zero);
    dump_array(dynamic_list_zero, 10);

    printf("realloc can change the size of a previous memory allocation\n");
    dynamic_list = realloc(dynamic_list, 20 * sizeof(int));
    validate_pointer(dynamic_list);
    for (int i = 10; i < 20; i++) {
        dynamic_list[i] = (i + 1) * 2;
    }
    dump_array(dynamic_list, 20);

    printf("You must free the memory manually");
    free(dynamic_list);
    free(dynamic_list_zero);
    return 0;
}
```
