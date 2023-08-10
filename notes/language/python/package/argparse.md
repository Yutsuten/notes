---
title: Argparse
ref: https://docs.python.org/3/library/argparse.html
---

## Description

Easily parse command line arguments to a python application.

## Usage

```python
import argparse
```

In the `add_argument`,
add `--` to the beginning for optional arguments.

```python
parser = argparse.ArgumentParser(description='Optional app description')
parser.add_argument('--input', type=str, help='input file')
parser.add_argument('--switch', action='store_true', help='a switch that holds true or false')
args = parser.parse_args()
```

Access the arguments using the dot notation:

```python
input = args.input
switch = args.switch
```

Send the arguments to a function:

```python
main(**vars(args))
```

### Mutually exclusive arguments

```python
parser = argparse.ArgumentParser()
group = parser.add_mutually_exclusive_group(required=True)
group.add_argument('--foo', action='store_true')
group.add_argument('--bar', action='store_true')
args = parser.parse_args()
```
