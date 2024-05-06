---
title: Data types
ref: https://en.wikipedia.org/wiki/C_data_types
---

## Common types

Check a full list of format specifiers [here](https://www.gnu.org/software/libc/manual/html_node/Table-of-Output-Conversions.html).

| Type | Size (bytes) | Format specifier |
| --- | --- | --- |
| `char`, `signed char`, `unsigned char` | 1 | `%c` |
| `short`, `short int` | 2 | `%hd` `%hi` |
| `int` | 2, **4** | `%i` `%d` |
| `unsigned int` | 2, **4** | `%u` |
| `long`, `long int` | 4, **8** | `%ld` `%li` |
| `long long`, `long long int` | 8+ | `%lld` `%lli` |
| `unsigned long`, `unsigned long int` | 4+ | `%lu` |
| `unsigned long long`, `unsigned long long int` | 4+ | `%llu` |
| `float` | 4 | `%f` |
| `double` | 8 | `%lf` |
| `long double` | 10+, **12, 16** | `%Lf` |

Force type sign:

```c
signed TYPE
unsigned TYPE
```

Create constants:

```c
const TYPE
```

### Examples

Creating numbers.

```c
float exponential_notation = 1e3;  // same as 1 * 10^3 = 1000
const float PI = 3.14159;
int octal_num = 021, hexadecimal_num = 0xff;
float avg = (float) 5 / 2;  // Type casting
```

Character literals use `'` while string literals use `"`.

```c
char c = 'c';
char name[] = "Sora";
```

Get the variable size at runtime with `sizeof()`:

```c
printf("Size of PI is %lu bytes.\n", sizeof(PI));
```

Print ASCII value of a char:

```c
char c = 'c';
printf("Character %c has code %d", c, c);
return 0;
```
