---
title: Setup
ref: https://docs.djangoproject.com/en/2.0/topics/i18n/
---

## Project setup

### Install Django

```shell
pip install Django
```

### Configuration

```shell
django-admin startproject projectname
cd projectname/
python3 -m venv venv
source venv/bin/activate
pip install Django
sudo apt-get install python-dev default-libmysqlclient-dev
pip install mysqlclient
```

```python
## projectname/settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'db_name',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': 'localhost',
    }
}
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

TIME_ZONE = 'Asia/Tokyo'
```

```shell
python manage.py migrate
```

## New app setup

```shell
python manage.py startapp appname
```

```python
## projectname/settings.py
INSTALLED_APPS = [
    'appname.apps.AppnameConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

```python
## urls.py
from django.conf.urls import include

path('appname/', include('appname.urls')),
```

```python
## appname/urls.py
from django.urls import path

from . import views

app_name = 'appname'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]
```

## Static directory

```python
## settings.py
## Search for static folder in root directory
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]
```

## Template directory

```python
## settings.py
TEMPLATES = [
    {
        # ...
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        # ...
    },
]
```

## i18n

### Usage

```python
## settings.py
## Create locale folder in root and add this to settings:
LOCALE_PATHS = [
    os.path.join(BASE_DIR, 'locale'),
]
```

On your template add:

```html
{% load i18n %}
{% trans "Import CSV" %}
```

Create message files (ignores venv folder):

```shell
python manage.py makemessages -l en -i venv
python manage.py makemessages -l ja -i venv
```

Add some translations to `locale/ja/LC_MESSAGES/django.po`:

```python
msgid "Import CSV"
msgstr "CSVインポートー"
```

Always when there are changes in translations, run this:

```shell
python manage.py compilemessages
```
