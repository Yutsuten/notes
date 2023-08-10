---
title: Cryptography
---

## Install

```bash
pip install cryptography
```

## Simple usage

```python
key = Fernet.generate_key()
message = 'John Doe'
encrypted_message = Fernet(key).encrypt(message.encode())
print(encrypted_message)
decrypted_message = Fernet(key).decrypt(encrypted_message)
print(decrypted_message.decode())
```
