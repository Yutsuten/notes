---
title: Package manager
ref: https://dev.to/equiman/npm-vs-yarn-vs-pnpm-commands-cheatsheet-3el8
---

## Management

### Package

| | npm | yarn | pnpm |
| --- | --- | --- | --- |
| Initialize package.json | `npm init` | `yarn init` | `pnpm init` |
| Initialize from template | `npm init [initializer]` | `yarn create [initializer]` | `pnpm create [initializer]` |
| Install from package.json | `npm install` | `yarn [install]` | `pnpm install` |
| Install new package | `npm install <package> [--global\|--save-dev]` | `yarn [global] add <package> [--dev]` | `pnpm add <package> [--global\|--save-dev]` |
| Uninstall package | `npm uninstall <package> [--global]` | `yarn [global] remove <package>` | `pnpm remove <package> [--global]` |
| Update package | `npm update [<package>] [--global]` | `yarn [global] upgrade [<package>] [--latest]` | `pnpm update [<package>] [--latest] [--global]` |

### Project

| | npm | yarn | pnpm |
| --- | --- | --- | --- |
| Run script | `npm run <script>` | `yarn run <script>` | `pnpm [run] <script>` |
| Run test | `npm test` | `yarn test` | `pnpm test` |
| Create bundle | `npm build` | `yarn build` | `pnpm build` |
| Global bin directory | PREFIX + `/bin` | `yarn global bin` | ? |
| Global package directory | `npm config set prefix ~/.npm` | `yarn global dir` | ? |

### Other

| | npm | yarn | pnpm |
| --- | --- | --- | --- |
| Run remotely | `npx` | `yarn dlx` | `pnpm dlx` |

## Pnpm

Override version of package/dependency (add to `package.json`):

```json
{
  "pnpm": {
    "overrides": {
      "package": "version"
    }
  }
}
```
