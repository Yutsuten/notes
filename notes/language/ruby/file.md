---
title: File
ref: https://docs.ruby-lang.org/en/3.4/File.html
---

## Modes

Append can only write to the end of the file.

| Mode | Create                       | Truncate                     | Read                         | Write                         | Initial Pos |
| ---- | ---------------------------- | ---------------------------- | ---------------------------- | ----------------------------- | ----------- |
| `r`  | <span class="red">✘</span>   | <span class="red">✘</span>   | <span class="green">✔</span> | <span class="red">✘</span>    | Start       |
| `r+` | <span class="red">✘</span>   | <span class="red">✘</span>   | <span class="green">✔</span> | <span class="green">✔</span>  | Start       |
| `w`  | <span class="green">✔</span> | <span class="green">✔</span> | <span class="red">✘</span>   | <span class="green">✔</span>  | Start       |
| `w+` | <span class="green">✔</span> | <span class="green">✔</span> | <span class="green">✔</span> | <span class="green">✔</span>  | Start       |
| `a`  | <span class="green">✔</span> | <span class="red">✘</span>   | <span class="red">✘</span>   | <span class="yellow">▲</span> | End         |
| `a+` | <span class="green">✔</span> | <span class="red">✘</span>   | <span class="green">✔</span> | <span class="yellow">▲</span> | End         |

Append `b` to mode for binary data.

Line ending [reference](https://en.wikipedia.org/wiki/Newline):

| OS      | Line ending |
| ------- | ----------- |
| Linux   | `\n`        |
| Windows | `\r\n`      |

## Read file

Read everything in a single read:

```rb
File.read('filename.txt')
```

Open a file for multiple reads (`strip` to remove trailing `\n`):

```rb
File.open('filename.txt', 'r') do |file|
  file.readline.strip
  file.readline.strip
end
```

## Write file

Write everything in a single write:

```rb
File.write('file.txt', "Hello World\n")
```

Open a file for multiple writes:

```rb
File.open('filename.txt', 'w') do |file|
  file.write("First line\n")
  file.write("Second line\n")
end
```
