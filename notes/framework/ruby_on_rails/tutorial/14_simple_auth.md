---
title: Simple auth
---

```ruby
## app/controllers/articles_controller.rb
class ArticlesController < ApplicationController
  http_basic_authenticate_with name: "dhh", password: "secret", except: [:index, :show]
  # ...
end

## app/controllers/comments_controller.rb
class CommentsController < ApplicationController
  http_basic_authenticate_with name: "dhh", password: "secret", only: :destroy
  # ...
end
```
