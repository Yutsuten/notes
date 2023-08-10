---
title: Form save
---

## Generate model and migration

```bash
rails generate model Article title:string text:text
```

To apply the migration:

```bash
rails db:migrate
```

## Save the data in the controller

```ruby
## app/controllers/articles_controller.rb
class ArticlesController < ApplicationController
  def show
    @article = Article.find(params[:id])
  end

  def new
  end

  def create
    @article = Article.new(article_params)

    @article.save
    redirect_to @article
  end

  private
  def article_params
    params.require(:article).permit(:title, :text)
  end
end
```

## View template

At `app/views/articles/show.html.erb`:

```erb
<p>
  <strong>Title:</strong>
  <%= @article.title %>
</p>

<p>
  <strong>Text:</strong>
  <%= @article.text %>
</p>
```
