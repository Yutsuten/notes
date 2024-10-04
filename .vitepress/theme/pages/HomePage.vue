<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { data as buildtime } from '../data/buildtime.data';
import { data as notes } from '../data/notes.data';
import { useData } from 'vitepress';

const lastUpdated = ref('');
const { datetime } = useData().theme.value;

onMounted(() => {
  const intl = new Intl.DateTimeFormat(datetime.locale, datetime.options);
  lastUpdated.value = intl.format(buildtime);
});
</script>

<template>
  <div class="home">
    <h1>
      <i class="fa-solid fa-house-chimney"></i>
      Home
    </h1>
    <p>
      Welcome to Mateus Eto's notes, a personal knowledge base mainly with programming and Linux
      tools information.
    </p>
    <p>
      There are currently {{ notes.length - 1 }} notes. The last update was on {{ lastUpdated }}.
    </p>
    <div class="credits">
      <em>
        Powered by <a
          rel="nofollow"
          href="https://pages.github.com/"
        >
          GitHub Pages
        </a> and <a
          rel="nofollow"
          href="https://vitepress.dev/"
        >VitePress</a>.
      </em>
      <em>
        Favicon by <a
          rel="nofollow"
          href="https://icons8.com/"
        >Icons8</a>.
      </em>
    </div>
  </div>
</template>

<style>
.home {
  padding: 75px 30px 20px;
}

.credits {
  position: absolute;
  right: 30px;
  bottom: 20px;
  text-align: right;
}

@media (width >= 960px) {
  .home {
    padding: 20px 30px;
  }
}
</style>
