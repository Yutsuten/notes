---
title: Array
doc: https://www.programiz.com/c-programming/c-arrays
---

## One dimensional

Seems that with `gcc` arrays are initialized with 0.

```c
int numbers[5];
int numbers[5] = {};
int numbers[] = {30, 35, 40, 45, 50};
```

Example:

```c
#include <stdio.h>

void dump_array(int array[], int size) {
    for (int i = 0; i < size; i++) {
        printf(" %d", array[i]);
    }
    printf("\n\n");
}

int main() {
    const int SIZE = 5;
    int numbersA[SIZE] = {};                // Explicit array size - Don't initialize or = {};
    int numbersB[] = {30, 35, 40, 45, 50};  // Implicit array size
    printf("numbersA\n");
    dump_array(numbersA, SIZE);
    printf("numbersB\n");
    dump_array(numbersB, SIZE);
    printf("Dangerous access = %d\n", numbersB[10]);  // Access element out of bound, C allows it
    return 0;
}
```

## Multidimensional

```c
int matrix[2][3];
int matrix[2][3] = {};
int matrix[][3] = {{5, 10, 15}, {30, 35, 40}};
```

Example:

```c
#include <stdio.h>

void dump_matrix(int matrix[][3], int num_rows) {  // Specifying the number of columns is mandatory
    for (int i = 0; i < num_rows; i++) {
        for (int j = 0; j < 3; j++) {
            printf(" %2d", matrix[i][j]);
        }
        printf("\n");
    }
    printf("\n");
}

int main() {
    const int SIZE = 5;
    int matrixA[SIZE][3] = {};
    int matrixB[2][3] = {{5, 10, 15}, {30, 35, 40}};  // Cannot compile if using SIZE instead of literal
    // int matrixB[][3] = {{5, 10, 15}, {30, 35, 40}};  // Is also OK
    printf("matrixA\n");
    dump_matrix(matrixA, SIZE);
    printf("matrixB\n");
    dump_matrix(matrixB, 2);
    return 0;
}
```
