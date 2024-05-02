---
title: Flow control
ref: https://www.programiz.com/c-programming/c-if-else-statement
---

## Condition

```c
if (10 > 5) {
    do_something();
} else if (flag) {
    flag_is_true();
} else {
    do_something_else();
}
```

## For loop

```c
for (int i = 10; i >= 0; i--) {
    printf("Countdown: %d\n", i);
}
```

## While loop

```c
int price = 5;
while (price < 100) {
    if (price == 13) {
        price += 8;
        continue;  // Skip to next interation
    }
    if (price == 50) {
        break;  // Finish the loop now
    }
    printf("I may buy it for $%d\n", price);
    price += 8;
}
printf("$%d is too expensive!\n", price);
```

## Do while loop

```c
int number;
printf("Choose a number [0-10] inclusive:\n");
do {
    printf("Your choice: ");
    scanf("%d", &number);
} while (number < 0 || number > 10);
```

## Switch

```c
int choice;
printf("Choose 1 or 2: ");
scanf("%d", &choice);
switch (choice) {
    case 1:
        printf("You chose the number 1.\n");
        break;
    case 2:
        printf("You chose the number 2.\n");
        break;
    default:
        printf("Not a valid choice.\n");
}
```

## Goto

```c
goto skip_warning;
printf("You shouldn't be using goto, you know.\n");
skip_warning:
printf("End of the program.\n");
```
