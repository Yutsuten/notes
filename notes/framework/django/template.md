---
title: Template
---

## List

```html
{% if modelname_list %}
<ul>
    {% for modelname modelname_list %}
    <li><a href="{% url 'modelname:detail' modelname.id %}">{{ modelname.name }}</a></li>
    {% endfor %}
</ul>
{% else %}
<p>No items available</p>
{% endif %}
```

### Pagination

```html
<nav aria-label="...">
    <ul class="pagination justify-content-end">
        {% if page_obj.has_previous %}
        <li class="page-item">
            <a class="page-link" href="?page={{ page_obj.previous_page_number }}">Previous</a>
        {% else %}
        <li class="page-item disabled">
            <a class="page-link">Previous</a>
        {% endif %}
        </li>

        {% if page_obj.has_previous %}
        <li class="page-item"><a class="page-link" href="?page={{ page_obj.previous_page_number }}">{{ page_obj.previous_page_number }}</a></li>
        {% endif %}
        <li class="page-item active">
            <a class="page-link" href="javascript:void(0)">{{ page_obj.number }} <span class="sr-only">(current)</span></a>
        </li>
        {% if page_obj.has_next %}
        <li class="page-item"><a class="page-link" href="?page={{ page_obj.next_page_number }}">{{ page_obj.next_page_number }}</a></li>
        {% endif %}

        {% if page_obj.has_next %}
        <li class="page-item">
            <a class="page-link" href="?page={{ page_obj.next_page_number }}">Next</a>
        {% else %}
        <li class="page-item disabled">
            <a class="page-link">Next</a>
        {% endif %}
        </li>
    </ul>
</nav>
```

## Details

```html
<h2>{{ project.name }}</h2>
<p>{{ project.description }}</p>
<p><b>Created:</b>{{ project.created }}</p>
<p><b>Last modified:</b>{{ project.last_modified }}</p>

## Reverse relationships
{% if project.task_set.count > 0 %}
{% for task in project.task_set.all %}
<tr>
    <td>{{ task.name }}</td>
    <td>{{ task.deadline }}</td>
    <td>{{ task.difficulty }}</td>
    <td>{{ task.priority }}</td>
    <td>{{ task.get_status_display }}</td>
    <td></td>
</tr>
{% endfor %}
{% else %}
<tr>
    <td colspan="6">No tasks yet.</td>
</tr>
{% endif %}
```

## Form

```html
<form action="" method="post">{% csrf_token %}
    {% for field in form %}
    <div class="form-group">
        {{ field.errors }}
        {{ field.label_tag }} {{ field }}
        {% if field.help_text %}
        <p class="help">{{ field.help_text|safe }}</p>
        {% endif %}
    </div>
    {% endfor %}
    <button class="btn btn-primary" type="submit">Save</button>
</form>
```

## Extend

```html
<h1>Common text</h1>
<div>{% block content %}{% endblock %}</div>
```

```html
{% extends 'base.html' %}
{% block content %}
<h1>My template</h1>
{% endblock %}
```

## Tags and filters

```html
<h2>{{ value|floatformat:2 }}</h2>
```

## Load static file

```html
{% load static %}
<link rel="stylesheet" type="text/css" href="{% static 'style.css' %}" />
```

## Current page or app

```html
<li class="nav-item {% if request.resolver_match.app_name == 'projects' %}active{% endif %}">
    <a class="nav-link" href="{% url 'projects:index' %}">Project<span class="sr-only">(current)</span></a>
</li>
<li class="nav-item {% if request.resolver_match.url_name == 'about' %}active{% endif %}">
    <a class="nav-link" href="{% url 'habitica_api' %}">API data <span class="sr-only">(current)</span></a>
</li>
```

## Ajax POST

### Usage

Adding the CSRF to the post so django accepts the request.

#### With js-cookie dependency

```js
var Cookies = require('js-cookie');

data = {
    field1 = true,
    csrfmiddlewaretoken: Cookies.get('csrftoken')
}
$.post(url, data, response => {
    console.log(response);
});
```

#### No dependencies

```js
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

data = {
    field1 = true,
    csrfmiddlewaretoken: getCookie('csrftoken')
}
$.post(url, data, response => {
    console.log(response);
});
```
