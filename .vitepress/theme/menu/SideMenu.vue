<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import generateNotesIndex from '../lib/sideMenu';
import { useData } from 'vitepress';

defineEmits(['jump']);

const { page, site } = useData();

const search = ref('');
const indexElement = ref<HTMLDivElement | null>(null);
const searchElement = ref<HTMLInputElement | null>(null);
const searchUrl = ref('');
const notes = computed(() => generateNotesIndex(search.value, site.value.base));

function isActive(url?: string) {
  if (!url) {
    return false;
  }
  return `${url}.md` === `${site.value.base}${page.value.relativePath}`;
}

onMounted(() => {
  watch(search, (newSearch) => {
    const url = new URL(window.location.href);
    const cleanedSearch = newSearch.trim().replace(/\s+/gu, ' ');
    if (cleanedSearch) {
      url.searchParams.set('search', cleanedSearch);
    } else {
      url.searchParams.delete('search');
    }
    window.history.replaceState(null, '', url.href);
    searchUrl.value = url.search;
  });

  const searchParam = new URL(window.location.href).searchParams.get('search');
  search.value = searchParam ?? '';

  window.addEventListener('keydown', (event) => {
    if (!searchElement.value || !indexElement.value) {
      return;
    }
    if (document.activeElement === searchElement.value) {
      switch (event.key) {
        case 'Enter':
          Array.from(indexElement.value.getElementsByTagName('a'))
            .find((link) => link.hasAttribute('href'))
            ?.click();
          break;
        case 'Escape':
          searchElement.value.blur();
          event.preventDefault();
          break;
        // No default
      }
    } else {
      switch (event.key) {
        case '/':
          searchElement.value.focus();
          event.preventDefault();
          break;
        case 'Backspace':
          searchElement.value.focus();
          break;
        // No default
      }
    }
  });
});
</script>

<template>
  <div class="sidemenu">
    <div class="fixed">
      <div class="contents">
        <aside>
          <div class="search">
            <label for="search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
              id="search"
              ref="searchElement"
              v-model="search"
              type="text"
              placeholder="Search"
              autofocus
            >
          </div>
          <div
            ref="indexElement"
            class="index"
            tabindex="-1"
          >
            <div
              v-for="note in notes"
              :key="note.id"
              :class="['entry', 'depth' + note.depth, { active: isActive(note.url) }]"
            >
              <a
                :href="note.url ? note.url + searchUrl : undefined"
                :style="{ paddingLeft: 12 * note.depth + 'px' }"
                @click="note.url ? $emit('jump') : null"
              >
                {{ note.text }}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<style>
.sidemenu .fixed {
  position: fixed;
}

.sidemenu .contents {
  display: contents;
}

.sidemenu aside {
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 250px;
  max-width: 250px;
  max-height: 100vh;
  margin-left: 30px;
}

.sidemenu .search {
  position: relative;
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 14px;
}

.sidemenu .search label {
  position: absolute;
  top: 7px;
  left: 9px;
}

.sidemenu .search input {
  width: 180px;
  padding: 6px 6px 6px 30px;
  font-size: 14px;
  color: var(--text);
  background-color: var(--bg-main);
  border: solid 2px var(--text-comment);
  border-radius: 2px;
}

.sidemenu .search input:focus {
  border: solid 2px var(--link);
  outline: unset;
  box-shadow: 0 0 3px var(--link);
}

.sidemenu .search input::placeholder {
  color: var(--text-comment-hover);
  opacity: 1;
}

.sidemenu .index {
  flex-grow: 1;
  padding-right: 30px;
  padding-bottom: 10px;
  overflow-y: auto;
}

.sidemenu .index .entry a {
  display: block;
  padding: 1px 0;
}

.sidemenu .index .entry:hover {
  background-color: var(--bg-table);
}

.sidemenu .index .entry a:focus {
  color: var(--link-hover);
  background-color: var(--bg-table);
}

.sidemenu .index .entry.depth0 :not(a[href]) {
  margin-top: 3px;
  font-size: 1.6em;
}

.sidemenu .index .entry.depth1 :not(a[href]) {
  font-size: 1.4em;
}

.sidemenu .index .entry.depth2 :not(a[href]) {
  font-size: 1.2em;
}

.sidemenu .index .entry.active {
  background-color: var(--bg-main);
}

.sidemenu .index .entry.active a[href] {
  font-weight: bold;
}
</style>
