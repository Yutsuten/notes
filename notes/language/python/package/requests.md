---
title: Requests
ref: https://requests.readthedocs.io/en/latest/
pypi: requests
---

## Usage

```python
import requests
```

Request structure:

```python
url = 'https://site.com/api'
params = {  # => '?greet=true'
    'greet': 'true'
}
headers = {
    'x-api-user': '12345678-90ab-416b-cdef-1234567890ab',
    'x-api-key': '12345678-90ab-416b-cdef-1234567890ab'
}
data = {
    'field1': 'data1',
    'field2': 'data2'
}

requests.get(url, params=params, headers=headers)
requests.post(url, headers=headers, data=data)
requests.put(url, headers=headers, data=data)
requests.delete(url, headers=headers)
```

Check the response content:

```python
response.status_code
response.json()
```

## Retry

[Stackoverflow](https://stackoverflow.com/a/35504626)

Create a requests session instance,
then mount it with a HTTP adapter using the desired retry configuration.

By creating a session,
the underlying TCP connection is reused ([reference](https://requests.readthedocs.io/en/master/user/advanced/#session-objects)),
therefore the retries have better performance.

```python
from urllib3.util.retry import Retry

with requests.Session() as session:
    session.mount('https://', requests.adapters.HTTPAdapter(
        max_retries=Retry(total=5, backoff_factor=2)
    ))
    response = session.get('https://example.com/')
```

## Dealing with huge files

[Reference](https://github.com/requests/requests/issues/1784)

Use the file pointer instead of loading all its contents to avoid memory issues.

```python
import requests

with open('file_50GB.bin', 'rb') as f:
    requests.put('http://myserv.com', data=f)           # OK (stream upload)
    # requests.put('http://myserv.com', data=f.read())  # NG
```
