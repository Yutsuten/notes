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
