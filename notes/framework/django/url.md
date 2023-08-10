---
title: URL
---

## Main app

```python
## main/urls.py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('projects/', include('projects.urls')),
    path('admin/', admin.site.urls),
]
```

## App class

```python
## appname/urls.py
from . import views

app_name = 'myapp'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>', views.DetailView.as_view(), name='detail'),
    path('edit/<int:pk>', views.EditView.as_view(), name='edit'),
    path('create', views.CreateView.as_view(), name='create'),
    path('delete/<int:pk>', views.DeleteView.as_view(), name='delete'),
]
```

## Redirect

```python
## urls.py
from django.views.generic import RedirectView
from django.urls import reverse_lazy
from . import views

urlpatterns = [
    path('', RedirectView.as_view(url=reverse_lazy('login')), name='index'),
    path('login', views.LoginView.as_view(), name='login'),
]
```
