<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useData } from 'vitepress';

const { page, theme } = useData();
const { datetime } = theme.value;

const PKG_LINKS = {
  arch: 'https://archlinux.org/packages/?name={}',
  brew: 'https://formulae.brew.sh/formula/{}',
  npm: 'https://www.npmjs.com/package/{}',
  pypi: 'https://pypi.org/project/{}',
  ubuntu: 'https://packages.ubuntu.com/search?keywords={}',
};

const lastUpdated = ref('');

const notePath = computed(() => {
  const filePathList = page.value.filePath.split('/');
  filePathList.pop();
  return filePathList.join(' » ').toUpperCase();
});

const noteMetaPkgs = computed(() => (Object.keys(PKG_LINKS) as Array<keyof typeof PKG_LINKS>)
  .filter((pkgName) => Object.keys(page.value.frontmatter).includes(pkgName)));

onMounted(() => {
  watchEffect(() => {
    const intl = new Intl.DateTimeFormat(datetime.locale, datetime.options);
    lastUpdated.value = intl.format(new Date(page.value.lastUpdated!));
  });
});
</script>

<template>
  <div class="note">
    <div
      id="note-head"
      class="head"
    >
      <div>{{ notePath }}</div>
      <h1>{{ page.title }}</h1>
      <div class="metadata">
        <div class="last-updated">
          <b>Last updated:</b>
          <span>{{ lastUpdated }}</span>
        </div>
        <div
          v-if="page.frontmatter.ref"
          class="reference"
        >
          <b>Reference:</b>
          <a
            :href="page.frontmatter.ref"
            rel="nofollow"
          >
            {{ page.frontmatter.ref.split('/')[2] }}
          </a>
        </div>
        <div
          v-if="noteMetaPkgs.length"
          class="package"
        >
          <b>Package:</b>
          <a
            v-for="pkgName in noteMetaPkgs"
            :key="pkgName"
            :href="PKG_LINKS[pkgName]?.replace('{}', page.frontmatter[pkgName])"
            rel="nofollow"
          >
            {{ pkgName }}
          </a>
        </div>
        <div
          v-if="page.frontmatter.man"
          class="man-page"
        >
          <b>Man page:</b>
          <a
            :href="`https://man.archlinux.org/man/${page.frontmatter.man}`"
            rel="nofollow"
          >
            {{ page.frontmatter.man }}
          </a>
        </div>
        <div
          v-if="page.frontmatter.vim"
          class="vim-help"
        >
          <b>Vim:</b>
          <span>help {{ page.frontmatter.vim }}</span>
        </div>
      </div>
    </div>
    <Content />
  </div>
</template>

<style>
.note {
  padding: 75px 30px 20px;
}

@media (width >= 960px) {
  .note {
    padding: 20px 30px;
  }
}

.note .metadata span,
.note .metadata a {
  padding-left: 5px;
}

.note .metadata a::after {
  display: inline-block;
  padding-left: 3px;
  font: var(--fa-font-solid);
  font-size: 0.5rem;
  vertical-align: super;
  content: '\f35d';
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.note .metadata > div {
  padding-left: 8px;
  margin-top: 3px;
  margin-bottom: 3px;
  border-left-style: solid;
  border-left-width: 2px;
}

.note .metadata > div.last-updated {
  color: var(--text-green);
  border-left-color: var(--text-green);
}

.note .metadata > div.reference {
  color: var(--link);
  border-left-color: var(--link);
}

.note .metadata > div.package,
.note .metadata > div.package a {
  color: var(--text-magenta);
  border-left-color: var(--text-magenta);
}

.note .metadata > div.man-page,
.note .metadata > div.man-page a {
  color: var(--text-yellow);
  border-left-color: var(--text-yellow);
}

.note .metadata > div.vim-help {
  color: var(--red);
  border-left-color: var(--red);
}

.note .metadata > div.vim-help span {
  user-select: all;
}

.note .metadata > div.package a:hover {
  color: var(--text-magenta-hover);
}

.note .metadata > div.man-page a:hover {
  color: var(--text-yellow-hover);
}
</style>
