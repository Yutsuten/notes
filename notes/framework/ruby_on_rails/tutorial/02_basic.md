---
title: Basic
---

## Empty application

```bash
## Generate basic files for the Ruby on Rails app
rails new appname

## Install necessary gems (written in Gemfile)
bundle install

## Start Rails development server
rails server
```

## Hello World

Create a controller called "Welcome" with an action called "index".

```bash
rails generate controller Welcome index
```

Customize the view (template).

```html
<!-- blog/app/views/welcome/index.html.erb -->
<h1>Hello, Rails!</h1>
```

Setup the routing.

```ruby
## blog/config/routes.rb
Rails.application.routes.draw do
  get 'welcome/index'

  root 'welcome#index'
end
```

Open <http://localhost:3000> and you should be able to see `Hello, Rails!` created previously.
