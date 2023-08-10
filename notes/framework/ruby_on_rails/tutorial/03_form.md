---
title: Form
---

## Creates a form and receives its data

```ruby
## blog/config/routes.rb
Rails.application.routes.draw do
  get 'welcome/index'

  resources :articles

  root 'welcome#index'
end
```

See the routes by running `rails routes`.

Then initialize the articles controller by running:

```bash
rails generate controller Articles
```

Now that we have the controller, lets create an action and a template to it.

```ruby
## app/controllers/articles_controller.rb
class ArticlesController < ApplicationController
  # Loads the form
  def new
  end

  # Receives the filled form data
  def create
    render plain: params[:article].inspect
  end
end
```

At `app/views/articles/new.html.erb`:

```erb
<h1>New Article</h1>

<%= form_with scope: :article, url: articles_path, local: true do |form| %>
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
```
