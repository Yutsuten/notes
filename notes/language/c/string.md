---
title: String
ref: https://www.programiz.com/c-programming/c-variables-constants
---

## Declaration

Strings are an array of characters that ends with the character `\0`.
The array syntax may also be used.

```c
char name[50];           // String of Length 50 bytes unitialized
char name[] = "Sora";    // String initialized and length calculated automatically
char name[50] = "Sora";  // String initialized and length set to 50 bytes
```

Avoid this:

```c
char[4] = "Sora";  // The last character `\0` does not fit
```

Assignment cannot be done after declaration.
Use `strcpy()` from `string.h` instead.

```c
char name[50];
name = "Hime";         // Compilation error
strcpy(name, "Hime");  // OK
```

## Character escape sequences

| Escape sequence | Character |
| --- | --- |
| `\b` | Backspace |
| `\f` | Form feed |
| `\n` | Newline |
| `\r` | Return |
| `\t` | Horizontal tab |
| `\v` | Vertical tab |
| `\\` | Backslash |
| `\'` | Single quotation mark |
| `\"` | Double quotation mark |
| `\?` | Question mark |
| `\0` | Null |

## Examples

Strip string function:

```c
/**
 * First search for the start index (start_i) and end index (end_i) of the final string.
 * The final string will be [start_i; end_i], both inclusive.
 * To handle the cases where the final string is length 0, end_i is initialized as start_i - 1.
 */
void str_strip(char text[], char rm_char) {
    int i = 0, start_i, end_i;
    while (text[i]) {
        if (text[i] != rm_char) {
            break;
        }
        i++;
    }
    start_i = i;
    end_i = i - 1;
    while (text[i]) {
        if (text[i] != rm_char) {
            end_i = i;
        }
        i++;
    }
    if (start_i) {
        for (int new_i = 0, i = start_i; i <= end_i; new_i++, i++) {
            text[new_i] = text[i];
        }
    }
    text[end_i - start_i + 1] = '\0';
}
```
