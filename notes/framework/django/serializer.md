---
title: Serializer
---

## Method field

```python
from rest_framework import serializers

class CommentSerializer(serializers.Serializer):
    email = serializers.EmailField()
    content = serializers.CharField(max_length=200)
    created = serializers.DateTimeField()
    custom_field = serializers.SerializerMethodField()

    def get_custom_field(self, obj):
        return 'Hello'
```
