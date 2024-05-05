---
title: Struct
ref: https://www.programiz.com/c-programming/c-structures
---

## Basic usage

Create a struct:

```c
// Struct only
struct Person {
    char name[50];
    int age;
};

// With variable
struct Person {
    char name[50];
    int age;
} user;
```

Then access its members:

```c
struct Person *user_ptr, user;
user.name
user.age

// From pointer we use `->` syntax
user_ptr = &user;
user_ptr->name  // Equivalent to (*user_ptr).name
user_ptr->age   // Equivalent to (*user_ptr).age
```

One can nest structures (struct inside struct):

```c
struct CitizenshipIdentifier {
    int number;
    int issue_year;
};

struct Person {
    struct CitizenshipIdentifier id;
    char name[50];
    int age;
};
```

Accessing members of nested structures:

```c
struct Person user;
user.id.number = 123456;
user.id.issue_year = 2024;
```

## Typedef

An alias for a type.
Nice to avoid typing `struct StructName` everytime.

```c
typedef struct PersonStruct {
    char name[50];
    int age;
} Person;
```

Usage:

```c
Person user;
user.name
user.age
```

## Examples

Simplest.

```c
#include <stdio.h>

struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person user;
    strcpy(user.name, "Yuki");
    user.age = 18;
    printf("Hello %s, you are %d years old.\n", user.name, user.age);
    return 0;
}
```

Create variable of struct in its declaration.

```c
#include <stdio.h>
#include <string.h>

struct Person {
    char name[50];
    int age;
} user;

int main() {
    strcpy(user.name, "Yuki");
    user.age = 18;
    printf("Hello %s, you are %d years old.\n", user.name, user.age);
    return 0;
}
```

Creating a `typedef`.

```c
#include <stdio.h>
#include <string.h>

typedef struct PersonStruct {
    char name[50];
    int age;
} Person;

int main() {
    Person user;
    strcpy(user.name, "Yuki");
    user.age = 18;
    printf("Hello %s, you are %d years old.\n", user.name, user.age);
    return 0;
}
```

Nesting structures.

```c
#include <stdio.h>
#include <string.h>

struct CitizenshipIdentifier {
    int number;
    int issue_year;
};

struct Person {
    struct CitizenshipIdentifier id;
    char name[50];
    int age;
};

int main() {
    struct Person user;
    user.id.number = 123456;
    user.id.issue_year = 2024;
    strcpy(user.name, "Yuki");
    user.age = 18;
    printf("[ID: %d issued in %d] Hello %s, you are %d years old.\n", user.id.number, user.id.issue_year, user.name, user.age);
    return 0;
}
```

Accessing members from a pointer.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person *user_ptr;
    user_ptr = (struct Person*) malloc(sizeof(struct Person));
    strcpy(user_ptr->name, "Yuki");
    user_ptr->age = 18;
    printf("Hello %s, you are %d years old.\n", user_ptr->name, user_ptr->age);
    free(user_ptr);
    return 0;
}
```

Updating struct instance inside a function.

```c
#include <stdio.h>
#include <string.h>

struct Person {
    char name[50];
    int age;
};

void fill_person(struct Person *person) {
    strcpy(person->name, "Yuki");
    person->age = 18;
}

int main() {
    struct Person user;
    fill_person(&user);
    printf("Hello %s, you are %d years old.\n", user.name, user.age);
    return 0;
}
```
