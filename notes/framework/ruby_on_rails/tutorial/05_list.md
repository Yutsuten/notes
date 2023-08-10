---
title: List
---

```ruby
## app/controllers/articles_controller.rb
class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  # ...
end
```

```erb
<!-- app/views/articles/index.html.erb -->
<h1>Listing articles</h1>

<table>
  <tr>
    <th>Title</th>
    <th>Text</th>
    <th></th>
  </tr>

  <% @articles.each do |article| %>
    <tr>
      <td><%= article.title %></td>
      <td><%= article.text %></td>
      <td><%= link_to 'Show', article_path(article) %></td>
    </tr>
  <% end %>
</table>
```

## Add links

```erb
<!-- app/views/welcome/index.html.erb -->
<h1>Hello, Rails!</h1>
<%= link_to 'My Blog', controller: 'articles' %>

<!-- app/views/articles/index.html.erb -->
<%= link_to 'New article', new_article_path %>

<!-- app/views/articles/new.html.erb -->
<%= link_to 'Back', articles_path %>

<!-- app/views/articles/show.html.erb -->
<%= link_to 'Back', articles_path %>
```
