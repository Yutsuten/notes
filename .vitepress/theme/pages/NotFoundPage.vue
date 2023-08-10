<script setup lang="ts">
import { useData } from 'vitepress';
const { site } = useData();
</script>

<template>
  <div class="notfound">
    <h1>
      <i class="fa-solid fa-triangle-exclamation"></i>
      Not Found
    </h1>
    <p>Sorry, this page does not exist. Maybe it was moved?</p>
    <a :href="site.base">
      <i class="fa-solid fa-angles-left"></i>
      Back to home
    </a>
  </div>
</template>

<style>
.notfound {
  padding: 75px 30px 20px;
}

@media (width >= 960px) {
  .notfound {
    padding: 20px 30px;
  }
}
</style>
