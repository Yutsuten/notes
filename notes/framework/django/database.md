---
title: Database
ref: https://nesdis.github.io/djongo/get-started/
---

## Djongo

### Install

```shell
pip install djongo
```

### Configuration

```python
## settings.py
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'ENFORCE_SCHEMA': False,
        'NAME': 'your-db-name',
        'HOST': 'localhost',
        'PORT': 27017,
        # If has authentication:
        'USER': 'db-username',
        'PASSWORD': 'password',
        'AUTH_SOURCE': 'db-name',
    }
}
```

#### Embedded Model

```python
## models.py
from djongo import models
from django.forms.models import model_to_dict
from django.utils import timezone

class MetaDataModel(models.Model):
    created_date = models.DateTimeField(default=timezone.now())
    modified_date = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return str(model_to_dict(self))

    class Meta:
        abstract = True

class Project(models.Model):
    meta_data = models.EmbeddedModelField(model_container=AbstractMetaDataModel)
    name = models.CharField(max_length=200)

    def save(self, *args, **kwargs):
        if not self.meta_data:
            self.meta_data = MetaDataModel()
        else:
            if self.meta_data.created_date.utcoffset() is None:
                self.meta_data.created_date = timezone.make_aware(self.meta_data.created_date)
            self.meta_data.modified_date = timezone.now()
        super().save(*args, **kwargs)
```

```python
## views.py
from django.views import generic
from . import models, forms
from django.utils import timezone

class ProjectView(generic.edit.CreateView):
    model = models.Project
    form_class = forms.ProjectForm # Add meta_data to form if it is editable
    template_name = 'project/create.html' # Add meta_data as any other field

    def form_valid(self, form):
        project = form.save(commit=False)
        project.meta_data = models.MetaDataModel()

        project.meta_data.created_date = timezone.now()
        project.meta_data.modified_date = timezone.now()
        # or
        setattr(project.meta_data, 'created_date', timezone.now())
        setattr(project.meta_data, 'modified_date', timezone.now())

        project.save()
        return super().form_valid(form)
```

#### Embedded Model as Array

```python
## models.py
from djongo import models
from django.forms.models import model_to_dict

class PhoneNumber(models.Model):
    number = models.CharField(max_length=15)

    def __str__(self):
        return str(model_to_dict(self))

    class Meta:
        abstract = True

class Company(models.Model):
    name = models.CharField(max_length=200)
    phone_numbers = models.ArrayModelField(model_container=PhoneNumber)

    def save(self, *args, **kwargs):
        if not self.phone_numbers:
            self.phone_numbers = []
        super().save(*args, **kwargs)
```

```python
## views.py
from django.views import generic
from . import models, forms
from django.utils import timezone

class CompanyView(generic.edit.CreateView):
    model = models.Company
    form_class = forms.CompanyForm # Add phone_numbers to form if it is editable
    template_name = 'company/create.html' # Add phone_numbers as any other field

    def form_valid(self, form):
        company = form.save(commit=False)

        company.phone_numbers = []

        phone1 = models.PhoneNumber()
        phone1.number = '1234-5678'
        company.phone_numbers.append(phone1)

        phone2 = models.PhoneNumber()
        phone2.number = '8765-4321'
        company.phone_numbers.append(phone2)

        company.save()
        return super().form_valid(form)
```

#### JSON encoding

```python
from djongo.models import Model
from django.forms.models import model_to_dict
from django.core.serializers.json import DjangoJSONEncoder
from datetime import date, datetime

def json_serial(obj):
    """JSON serializer for objects not serializable by default json code"""
    if isinstance(obj, (datetime, date)):
        return obj.isoformat()
    if isinstance(obj, Model):
        return model_to_dict(obj)
    raise TypeError("Type %s not serializable" % type(obj))

class JSONEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, Model):
            return model_to_dict(obj)
        return DjangoJSONEncoder.default(self, obj)

## When calling json.dumps or JsonResponse
json.dumps(data, default=json_serial)
JsonResponse(context, encoder=JSONEncoder)
```

#### Run migration

```txt
python manage.py migrate
```
