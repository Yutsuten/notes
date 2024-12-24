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

## Configuration

### Project specific

Create a `.helix` folder in the project's root directory.

To override the `languages.toml` configuration,
for example,
create it inside the `.helix` folder.

### Vue language server

To update the language server, update `languages.toml`
(read more [here](https://github.com/helix-editor/helix/discussions/10691)).

For `hybridMode = false`:

```toml
[language-server.typescript-language-server.config]
plugins = [{ name = "@vue/typescript-plugin", location = "/usr/bin/vue-language-server", languages = ["vue"] }]

[language-server.vuels.config]
vue = { hybridMode = false }

[[language]]
name = "vue"
language-servers = [ "vuels", "typescript-language-server" ]
```

For `hybridMode = true`:

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
