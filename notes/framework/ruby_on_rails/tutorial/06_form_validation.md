---
title: Form validation
---

```ruby
## app/models/article.rb
class Article < ApplicationRecord
  validates :title, presence: true, length: { minimum: 5 }
end

## app/controllers/articles_controller.rb
class ArticlesController < ApplicationController
  # ...

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article
    else
      render 'new'
    end
  end

  # ...
end
```

```erb
<!-- app/views/articles/new.html.erb -->
<%= form_with scope: :article, url: articles_path, local: true do |form| %>

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

  <!-- continuation -->
<% end %>
```
