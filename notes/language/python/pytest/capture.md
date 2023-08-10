---
title: Capture
ref: https://docs.pytest.org/en/6.2.x/capture.html
---

## Capturing logs

Use the fixture `caplog`.

Make sure `logger.propagate = True`.

```python
def test_logging(caplog):
  run_stuff()
  assert 'Log message content' in caplog.text
```

## Capturing stdout and stderr

Use the fixture `capsys`.

The return value from `readouterr` is a namedtuple with two attributes,
`out` and `err`.

```python
def test_logging(capsys):
  run_stuff()
  captured = capsys.readouterr()
  assert 'Output' in captured.out
  assert 'Error' in captured.err
```
