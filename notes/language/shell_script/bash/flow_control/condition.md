---
title: Condition
---

## If syntax

```bash
if [[ expression1 ]]; then
  echo 'First condition satisfied!!'
elif [[ expression2 ]]; then
  echo 'Second condition satisfied!!'
else
  echo 'No conditions satisfied.'
fi
```

## Case syntax

```bash
case $FRUIT in
  apple) echo Here is your apple.  ;;
  banana) echo Here is your banana.  ;;
  *) exit 1 ;;
esac
```
