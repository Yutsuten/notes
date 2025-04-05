<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { onContentUpdated, useData } from 'vitepress';
import ThemeToggleButton from '../components/ThemeToggleButton.vue';

interface Header {
  level: number,
  link: string,
  nextOffsetTop: number,
  offsetTop: number,
  title: string,
}

defineProps<{
  smallScreen: boolean;
}>();
defineEmits(['jump']);

const PAGE_TOP_PADDING = 20;

const { page, site } = useData();

const headers = ref<Header[]>([]);
const curScroll = ref(0);

function clearSearch(event: Event) {
  const keyboardEvent = new KeyboardEvent('keydown', {
    bubbles: true,
    code: 'Delete',
    key: 'Delete',
    shiftKey: true,
  });
  event.currentTarget!.dispatchEvent(keyboardEvent);
}

function getIndexClass(header: Header) {
  const classList = ['entry'];
  if (curScroll.value >= header.offsetTop && curScroll.value < header.nextOffsetTop) {
    classList.push('active');
  } else if (curScroll.value >= header.offsetTop) {
    classList.push('passed');
  }
  return classList;
}

function updateHeaders(): void {
  const noteHead = document.getElementById('note-head');
  const headersTmp = [...document.querySelectorAll('h2,h3')]
    .filter((el) => el.id && el.hasChildNodes())
    .map((el) => {
      const level = Number(el.tagName[1]) - 1;
      return {
        level,
        link: `#${el.id}`,
        nextOffsetTop: 0,
        offsetTop: (el as HTMLElement).offsetTop + noteHead!.clientHeight + PAGE_TOP_PADDING,
        title: el.textContent!.replace(/\u200B/gu, '').trim(),
      };
    });
  let nextOffsetTop = document.body.scrollHeight;
  for (let index = headersTmp.length - 1; index >= 0; index--) {
    headersTmp[index].nextOffsetTop = nextOffsetTop;
    nextOffsetTop = headersTmp[index].offsetTop;
  }
  headers.value = headersTmp;
}

function backToTop() {
  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: 0,
  });
}

onContentUpdated(() => {
  nextTick(updateHeaders);
  window.scrollTo(0, 0);
});

onMounted(() => {
  window.addEventListener('scroll', () => {
    curScroll.value = window.scrollY;
  });
  updateHeaders();
  curScroll.value = window.scrollY;
});
</script>

<template>
  <div class="navmenu">
    <nav :class="{ 'always-visible': !smallScreen }">
      <div class="theme">
        <div class="nav-title">
          Theme
        </div>
        <ThemeToggleButton />
      </div>
      <div
        v-if="page.filePath !== 'index.md'"
        class="misc-links"
      >
        <div class="nav-title">
          Links
        </div>
        <div class="link">
          <a
            :href="site.base"
            @click="$emit('jump'); clearSearch($event);"
          >
            <i class="fa-solid fa-house-chimney"></i>
            Home
          </a>
        </div>
        <div class="link">
          <a
            href="#top"
            @click="() => { backToTop(); $emit('jump') }"
          >
            <i class="fa-solid fa-arrow-up"></i>
            Back to top
          </a>
        </div>
      </div>
      <div
        v-if="headers.length && page.filePath !== 'index.md'"
        class="toc"
      >
        <div class="nav-title">
          On this page
        </div>
        <div class="toc-content">
          <a
            v-for="header in headers"
            :key="header.link"
            :href="header.link"
            :style="{ paddingLeft: (header.level - 1) + 'em' }"
            :class="getIndexClass(header)"
            @click="$emit('jump')"
          >
            {{ header.title }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.navmenu nav {
  position: fixed;
  min-width: 220px;
  padding: 5px 15px;
  margin-top: 20px;
}

.navmenu .always-visible {
  border-left: 3px solid var(--separator);
}

.navmenu .theme {
  padding-right: 15px;
  padding-left: 15px;
}

.navmenu .misc-links {
  padding: 8px 15px;
  margin-top: 14px;
  border-top: 1px solid var(--separator);
}

.navmenu .link {
  margin-top: 3px;
  margin-bottom: 3px;
}

.navmenu .link .fa-solid {
  min-width: 22px;
  text-align: center;
}

.navmenu .toc {
  padding: 8px 15px;
  border-top: 1px solid var(--separator);
}

.navmenu .nav-title {
  margin-bottom: 5px;
  font-weight: bold;
}

.navmenu a.entry {
  display: block;
}

.navmenu a.entry.passed {
  color: var(--text-comment);
}

.navmenu a.entry.passed:hover {
  color: var(--text-comment-hover);
}

.navmenu a.entry.active {
  font-weight: bold;
  color: var(--link);
}

.navmenu a.entry.active:hover {
  color: var(--link-hover);
}
</style>
