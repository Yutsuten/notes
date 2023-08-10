---
title: Authentication
ref: https://docs.djangoproject.com/en/1.11/topics/auth/default/#default-permissions
---

## Automatic

### Setting up

```python
## settings.py
LOGIN_URL = 'login'
LOGIN_REDIRECT_URL = 'projects:index'
LOGOUT_REDIRECT_URL = 'login'
```

```python
## urls.py
from django.contrib.auth import views as auth_views
from . import forms

urlpatterns = [
    path('login', auth_views.LoginView.as_view(authentication_form = forms.CustomAuthenticationForm), name='login'),
    path('logout', auth_views.LogoutView.as_view(), name='logout'),
]
```

```python
## forms.py
from django import forms
from django.contrib.auth.forms import AuthenticationForm

class CustomAuthenticationForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'size': 150, 'class': 'form-control', 'placeholder': 'Username'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'}))
```

Then on `registration/login.html`:

```html
{% if form.errors %}
<div class="row">
    <div class="col">
        <div class="alert alert-danger" role="alert">Your username and password didn't match. Please try again.</div>
    </div>
</div>
{% endif %}

<div class="row">
    <div class="col-lg-5 col-md-6 col-11 mx-auto">
        <div class="login-block">
            <h1 class="text-center">Login</h1>
            <form method="post">{% csrf_token %}
                <div class="form-group">
                    {{ form.username }}
                </div>
                <div class="form-group">
                    {{ form.password }}
                </div>
                <div class="row">
                    <div class="col-8 mx-auto">
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
```

## Manual

### Basic code

```python
<form action="{% url 'auth' %}" method="post">{% csrf_token %}
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <input type="submit" value="Login" />
</form>
```

```python
## views.py
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse

def auth(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if (user is not None):
        login(request, user)
        return HttpResponseRedirect(reverse('appname:index'))
    else:
        return render(request, 'login.html', {
            'error_message': 'Wrong user or password'
            })

def signout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))
```

### Limiting access to logged-in users

```python
## views.py
from django.contrib.auth.mixins import LoginRequiredMixin
class MyView(LoginRequiredMixin, View):
    # View contents
```

#### Redirecting

```python
## settings.py
LOGIN_URL = 'login' #Redirect URL
```

## Require Login

```python
## views.py
from django.contrib.auth.mixins import LoginRequiredMixin
from . import models

class IndexView(LoginRequiredMixin, generic.ListView):
    model = models.Project
    template_name = 'projects/index.html'
```

## Require Permission

```python
## views.py
from django.views import generic
from django.contrib.auth.mixins import PermissionRequiredMixin
from . import models

class CreateView(PermissionRequiredMixin, generic.edit.CreateView):
    model = models.ModelName
    fields = ['name']
    template_name = 'appname/create.html'
    permission_required = 'appname.add_modelname'
    raise_exception = True
```

### Default permissions

- `appname.add_modelname`
- `appname.change_modelname`
- `appname.delete_modelname`
