<script setup lang="ts">
import TopBarButton from './TopBarButton.vue';

defineEmits(['activate']);
</script>

<template>
  <div class="topbar">
    <TopBarButton
      target="side"
      icon="fa-magnifying-glass"
      @activate="(target: string) => $emit('activate', target)"
    />
    <TopBarButton
      target="nav"
      icon="fa-bars"
      @activate="(target: string) => $emit('activate', target)"
    />
  </div>
</template>

<style>
.sidebutton {
  left: 12px;
}

.navbutton {
  right: 12px;
}
</style>
