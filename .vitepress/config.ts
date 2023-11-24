import defineConfig from './theme/themeConfig';

export default defineConfig({
  base: '/notes/',
  cleanUrls: true,
  description: "Mateus Etto's notes, a personal knowledge base mainly with programming and Linux "
             + 'tools information.',
  head: [
    [
      'link', {
        href: '/notes/favicon.ico',
        rel: 'icon',
      },
    ],
  ],
  ignoreDeadLinks: 'localhostLinks',
  lang: 'en-US',
  lastUpdated: true,
  scrollOffset: {
    padding: 0,
    selector: '.topbar',
  },
  srcDir: './notes/',
  themeConfig: {
    datetime: {
      locale: 'default',
      options: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
  },
  titleTemplate: ':title | Notes',
});
