---
title: Model
ref: https://docs.djangoproject.com/en/2.1/topics/db/examples/one_to_one/
---

## Custom

```python
## appname/models.py
from django.db import models
from django.urls import reverse

class Question(models.Model):
    TRIVIAL = 1
    EASY = 2
    MEDIUM = 3
    HARD = 4

    DIFFICULTY_CHOICES = (
        (TRIVIAL, 'ちょちょい'),
        (EASY, '簡単'),
        (MEDIUM, '普通'),
        (HARD, '難しい'),
    )

    question_text = models.CharField(max_length=200)
    description = models.CharField(max_length=100, null=True, blank=True)
    pub_date = models.DateTimeField('date published')
    difficulty = models.IntegerField(choices=DIFFICULTY_CHOICES, default=EASY)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_modified = models.DateTimeField(auto_now=True, editable=False)

    def get_absolute_url(self):
        return reverse('pools:detail', kwargs={'pk': self.pk})

    def __str__(self):
        return self.question_text

    class Meta:
        # Change name in Admin
        verbose_name = 'Pool Question'
        verbose_name_plural = 'Pool Questions'

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    order = models.IntegerField(editable=False)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    last_modified = models.DateTimeField(auto_now=True, editable=False)

    def save(self, *args, **kwargs):
        if not self.order:
            if self.project.task_set.count() == 0:
                self.order = 1
            else:
                self.order = self.project.task_set.all().aggregate(models.Max('order'))['order__max'] + 1
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('pools:choicelist')

    def __str__(self):
        return self.choice_text

    class Meta:
        ordering = ['order']
        verbose_name = 'Pool Choice'
```

## One to One

### Models

```python
class Place(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=80)

class Restaurant(models.Model):
    place = models.OneToOneField(
        Place,
        on_delete=models.CASCADE,
    )
    serves_hot_dogs = models.BooleanField(default=False)
    serves_pizza = models.BooleanField(default=False)
```

### Accessing the associated model

```python
place = Place(name='Demon Dogs', address='944 W. Fullerton')
restaurant = Restaurant(place=place, serves_hot_dogs=True, serves_pizza=False)

place.restaurant
restaurant.place

from django.core.exceptions import ObjectDoesNotExist
try:
    place.restaurant
except ObjectDoesNotExist:
    print('There is no restaurant here.')
```
