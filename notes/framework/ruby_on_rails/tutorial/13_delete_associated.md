---
title: Delete associated
---

## Allow deleting comments

```erb
<!-- app/views/comments/_comment.html.erb -->
<p>
  <%= link_to 'Destroy Comment', [comment.article, comment],
               method: :delete,
               data: { confirm: 'Are you sure?' } %>
</p>
```

```ruby
## app/controllers/comments_controller.rb
class CommentsController < ApplicationController
  # ...

  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
  end

  # ...
end
```

## Cascade delete

```ruby
## app/models/article.rb
class Article < ApplicationRecord
  has_many :comments, dependent: :destroy
  validates :title, presence: true, length: { minimum: 5 }
end
```
