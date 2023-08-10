---
title: Shared form
---

## Using partials

Use the same code for displaying the form for new and edit.

```erb
<!-- app/views/articles/_form.html.erb -->
<%= form_with model: @article, local: true do |form| %>

  <% if @article.errors.any? %>
    <div id="error_explanation">
      <h2>
        <%= pluralize(@article.errors.count, "error") %> prohibited
        this article from being saved:
      </h2>
      <ul>
        <% @article.errors.full_messages.each do |msg| %>
          <li><%= msg %></li>
        <% end %>
      </ul>
    </div>
  <% end %>

  <p>
    <%= form.label :title %><br>
    <%= form.text_field :title %>
  </p>

  <p>
    <%= form.label :text %><br>
    <%= form.text_area :text %>
  </p>

  <p>
    <%= form.submit %>
  </p>

<% end %>
```

### Update new and edit views

```erb
<!-- app/views/articles/new.html.erb -->
<h1>New article</h1>

<%= render 'form' %>

<%= link_to 'Back', articles_path %>
```

```erb
<!-- app/views/articles/edit.html.erb -->
<h1>Edit article</h1>

<%= render 'form' %>

<%= link_to 'Back', articles_path %>
```
