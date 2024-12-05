import globals from 'globals';
import js from '@eslint/js';
import markdownlint from 'eslint-plugin-markdownlint';
import markdownlintParser from 'eslint-plugin-markdownlint/parser.js';
import ts from 'typescript-eslint';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  {
    ignores: [
      '.vitepress/cache/',
      '.vitepress/dist/',
    ],
  },
  {
    files: ['README.md', 'notes/**/*.md'],
    languageOptions: {
      parser: markdownlintParser,
    },
    plugins: {
      markdownlint,
    },
    rules: {
      ...markdownlint.configs.recommended.rules,
      'markdownlint/md010': [
        'error', {
          code_blocks: false,
          spaces_per_tab: 2,
        },
      ],
      'markdownlint/md013': [
        'error', {
          code_blocks: false,
          line_length: 100,
          tables: false,
        },
      ],
      'markdownlint/md033': [
        'error', {
          allowed_elements: ['br', 'span'],
        },
      ],
    },
  },
  {
    files: [
      '.vitepress/config.ts',
      '.vitepress/theme/**/*.ts',
      'shims.d.ts',
    ],
    languageOptions: {
      parser: ts.parser,
    },
    rules: {
      ...js.configs.all.rules,
      ...ts.configs.recommended.rules,
    },
  },
  {
    files: ['.vitepress/theme/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: ts.parser,
      },
    },
    plugins: {
      vue,
    },
    processor: 'vue/vue',
    rules: {
      ...js.configs.all.rules,
      ...vue.configs.base.rules,
      ...vue.configs.essential.rules,
      ...vue.configs['vue3-strongly-recommended'].rules,
      ...vue.configs['vue3-recommended'].rules,
      'no-useless-assignment': 'off',
      'vue/html-self-closing': ['error', { html: { normal: 'any' } }],
    },
  },
  {
    files: [
      '.vitepress/config.ts',
      '.vitepress/theme/**/*.ts',
      '.vitepress/theme/**/*.vue',
      'eslint.config.js',
      'shims.d.ts',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: 'module',
    },
    rules: {
      'array-element-newline': ['error', 'consistent'],
      'comma-dangle': ['error', 'always-multiline'],
      'dot-location': ['error', 'property'],
      'func-style': ['error', 'declaration'],
      'function-call-argument-newline': ['error', 'consistent'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'init-declarations': 'off',
      'max-len': ['error', { code: 100 }],
      'multiline-ternary': 'off',
      'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
      'no-magic-numbers': [
        'error', {
          enforceConst: true,
          ignore: [-1, 0, 1],
        },
      ],
      'no-plusplus': 'off',
      'no-ternary': 'off',
      'no-warning-comments': 'warn',
      'object-curly-spacing': ['error', 'always'],
      'one-var': ['error', 'never'],
      'operator-linebreak': ['error', 'before'],
      'padded-blocks': ['error', 'never'],
      'prefer-object-has-own': 'off',
      'quote-props': ['error', 'consistent-as-needed'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'space-before-function-paren': ['error', { named: 'never' }],
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'camelcase': 'off',
      'no-magic-numbers': 'off',
    },
  },
];
