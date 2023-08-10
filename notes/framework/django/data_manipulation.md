---
title: Data Manipulation
---

## Creating user

[Reference](https://docs.djangoproject.com/en/2.0/ref/contrib/auth/)

```python
from django.contrib.auth.models import User
user = User.objects.create_user('myusername', password='password')
user = User.objects.create_superuser('myusername', password='password')
user.save()
```

## Create, update, delete

[Reference](https://docs.djangoproject.com/en/2.1/ref/models/querysets/)

```python
## Creating data
from polls.models import Question
q = Question(question_text='Whats new?')
q.save()
q = Question.objects.create(question='Whats new?')

## Update data
Question.objects.get(id=1).update(question='Whats up?')

## Delete data
Question.objects.get(id=1).delete()
```

## Convenience methods

```python
obj, created = Person.objects.get_or_create(
    first_name='John', last_name='Lennon',
    defaults={'birthday': date(1940, 10, 9)},
)

obj, created = Person.objects.update_or_create(
    first_name='John', last_name='Lennon',
    defaults={'first_name': 'Bob'},
)
```

## Try except

```python
try:
    Question.objects.get(question('Whats up?'))
except Question.DoesNotExist:
    Question.objects.create(question='Whats new?')
```

## Queryset

```python
Question.objects.all()
Question.objects.get(id=1)
Question.objects.filter(id=1)
Question.objects.exclude(id=1)

## Selecting colums
Question.objects.values_list('id')  # Returns queryset of tuples
Question.objects.values_list('id', flat=True)  # Returns queryset of values

## List
Question.objects.exclude(id__in=[1, 2, 3])

## Nesting
Question.objects.filter(difficulty=1).exclude(id__in=[1, 2, 3])

## Lookups
Question.objects.filter(text__startswith='How ')
```

## Data set

```python
## A Question may have multiple Choices
Question.objects.get(id=2).choice_set.all()
Question.objects.get(id=2).choice_set.create(choice_text='Not much', votes=0)
Question.objects.get(id=2).choice_set.update(choice_text='Not much to say')
Question.objects.get(id=2).choice_set.delete()
Question.objects.get(id=2).choice_set.count()
```
