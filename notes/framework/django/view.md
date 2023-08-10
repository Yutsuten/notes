---
title: View
---

## List

```python
## appname/views.py
from django.views import generic
from . import models

## appname_list is set on template scope, and has all appname objects
class AppnameIndexView(generic.ListView):
    model = models.ModelName
    template_name = 'appname/index.html'

    paginate_by = 5 # Optional: To paginate
```

## Details

```python
## appname/views.py
from django.views import generic
from . import models

class AppnameDetailView(generic.DetailView):
    model = ModelName
    template_name = 'appname/details.html'
    # appname is set on template scope
```

## Create

From model

```python
## appname/views.py
from django.views import generic
from . import models

class AppnameCreateView(generic.edit.CreateView):
    model = models.ModelName
    fields = ['field1', 'field2']
    template_name = 'appname/form.html'

    # Optional: Edit POST data
    def form_valid(self, form):
        task = form.save(commit=False)
        # 'project' required field was excluded from form, the value in the URL is used instead
        task.project = models.Project.objects.get(pk=self.kwargs['project_id'])
        task.save()
        return super().form_valid(form)
```

Model + Form

```python
## appname/views.py
from django.views import generic
from . import models, forms

class AppnameCreateView(generic.edit.CreateView):
    model = models.ModelName
    form_class = forms.ModelNameForm
    template_name = 'appname/form.html'
```

## Edit

From model

```python
## appname/views.py
from django.views import generic
from . import models

class AppnameEditView(generic.edit.UpdateView):
    model = models.ModelName
    fields = ['field1', 'field2']
    template_name = 'appname/form.html'

    # Optional: Edit POST data
    def form_valid(self, form):
        task = form.save(commit=False)
        # 'project' required field was excluded from form, the value in the URL is used instead
        task.project = models.Project.objects.get(pk=self.kwargs['project_id'])
        task.save()
        return super().form_valid(form)
```

## Delete

```python
## appname/views.py
from django.views import generic
from django.urls import reverse_lazy
from . import models

class DeleteView(generic.edit.DeleteView):
    model = models.ModelName
    template_name = 'appname/delete.html'
    success_url = reverse_lazy('appname:index')
```

Model + Form

```python
## appname/views.py
from django.views import generic
from . import models, forms

class AppnameEditView(generic.edit.UpdateView):
    model = models.ModelName
    form_class = forms.ModelNameForm
    template_name = 'appname/form.html'
```

## Form

```python
## appname/views.py
from django.views import generic
from . import forms

class SimpleFormView(generic.edit.FormView):
    template_name = 'projects/simple_form.html'
    form_class = forms.SimpleForm
    success_url = reverse_lazy('index')

    # Optional: Initialize form data
    def get_initial(self):
        self.initial['field1'] = 'Default text form field1'
        return self.initial

    # Optional: Edit POST data
    def form_valid(self, form):
        print(form.cleaned_data)
        return super().form_valid(form)
```

## Querying

```python
from . import models

models.MyModel.objects.filter().exclude()
```

## Generic

### Function

```python
## views.py
from django.http import JsonResponse

def myView(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass
    return JsonResponse({})
```

### Template

```python
## appname/views.py
from django.views import generic

class AppnameIndexView(generic.TemplateView):
    template_name = 'appname/index.html'
```

### View

```python
## views.py
from django.views import View
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect

class CustomView(View):
    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, 'company/account_create.html', context)

    def post(self, request, *args, **kwargs):
        post_data = request.POST
        print(post_data.get('field1'))
        return HttpResponseRedirect(reverse_lazy('appname:viewname'))
```

## Common methods

```python
## appname/views.py
from django.views import generic

class AppnameIndexView(generic.TemplateView):
    template_name = 'appname/index.html'

    # Optional: Edit template context
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['new_info'] = 'Hello World!!'

        # Optional: Get variables captured from urls.py
        captured = self.kwargs

        # Optional: Get URL search parameters
        url_search_parameters = self.request.GET

        # Optional: set session
        self.request.session['data1'] = form.cleaned_data['field1']

        return context
```
