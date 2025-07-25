---
title: Argument
---

## Manual

```bash
## Check the number of arguments
if [[ "$#" -ne 2 ]]; then
  # >&2 Echo output to standard error instead of standard out
  echo "Usage: $0 arg1 arg2" >&2
  exit 1
fi

# Add double-quotes to preserve quoting and escaping
echo "$@"  # All arguments
echo "$1"  # Argument 1
echo "$2"  # Argument 2
```

Checking existence of argument:

```bash
if [[ "$*" == *' --argument'* ]]; then
  echo '--argument found'
fi
```

## Getopts

Works for arguments with a single letter.

Nice tutorial [here](https://wiki.bash-hackers.org/howto/getopts_tutorial).

```bash
while getopts ":a:" opt; do
  case ${opt} in
    a)
      echo "-a was triggered, Parameter: ${OPTARG}"
      ;;
    \?)
      echo "Invalid option: -${OPTARG}" >&2
      exit 1
      ;;
    :)
      echo "Option -${OPTARG} requires an argument." >&2
      exit 1
      ;;
  esac
done
```
