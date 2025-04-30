---
title: Helix
ref: https://helix-editor.com/
---

## Usage

### Search

The default search is smart, case insensitive if search pattern is all lower case,
case sensitive otherwise.
To force a mode, prepend the search with:

- `(?-i)`: Case sensitive search
- `(?i)`: Case insensitive search

### Truecolor

When accessing `helix` in a remote server (through SSH, for example),
one may need to set the `COLORTERM` to get truecolor support.

```fish
set -gx COLORTERM truecolor
```

### Sort

The helix way to sort is:

1. Select lines with `x`
2. Press `Alt+s` to split selection on newlines
3. Run `:sort` or `:rsort`

For case insensitive sort or version sort,
use pipe to run an external command (in this case `sort`):

1. Select lines with `x`
2. Run `|sort -f` for case insensitive sort, or `|sort -V` for version sort

## Configuration

### Project specific

Create a `.helix` folder in the project's root directory.

To override the `languages.toml` configuration,
for example,
create it inside the `.helix` folder.

### Vue language server

To update the language server, update `languages.toml`
(read more [here](https://github.com/helix-editor/helix/discussions/10691)).

#### For `hybridMode = true`

```toml
[language-server.typescript-language-server.config]
plugins = [{ name = "@vue/typescript-plugin", location = "/usr/bin/vue-language-server", languages = ["vue"] }]

[language-server.typescript-language-server.config.vue.inlayHints]
includeInlayEnumMemberValueHints = true
includeInlayFunctionLikeReturnTypeHints = true
includeInlayFunctionParameterTypeHints = true
includeInlayParameterNameHints = "all"
includeInlayParameterNameHintsWhenArgumentMatchesName = true
includeInlayPropertyDeclarationTypeHints = true
includeInlayVariableTypeHints = true

[[language]]
name = "vue"
language-servers = [ "vuels", "typescript-language-server" ]
```

#### For `hybridMode = false`

Use `vuels` for all `.{vue,js,ts,tsx,jsx}` files
(don't use `typescript-language-server` at all):

```toml
[language-server.vuels.config]
vue = { hybridMode = false }

[[language]]
name = "typescript"
language-servers = [ "vuels" ]

[[language]]
name = "tsx"
language-servers = [ "vuels" ]

[[language]]
name = "javascript"
language-servers = [ "vuels" ]

[[language]]
name = "jsx"
language-servers = [ "vuels" ]
```

Switch between `vuels` and `typescript-language-server`
(use `vuels` for only `.vue` files and `typescript-language-server` for `.{js,ts,tsx,jsx}` files):

```toml
[language-server.vuels.config]
vue = { hybridMode = false }

[language-server.typescript-language-server.config]
plugins = [{ name = "@vue/typescript-plugin", location = "/usr/bin/vue-language-server", languages = ["vue"] }]
```
