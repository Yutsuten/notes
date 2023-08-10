<script setup lang="ts">
defineProps<{
  target: string;
  icon: string;
}>();
defineEmits(['activate']);
</script>

<template>
  <button
    :class="['button', `${target}button`]"
    @click="$emit('activate', target)"
  >
    <i :class="['fa-solid', icon, 'fa-xl']"></i>
  </button>
</template>

<style>
.button {
  position: fixed;
  top: 8px;
  padding: 8px 10px;
  color: var(--text);
  cursor: pointer;
  background-color: var(--bg-sec);
  border: 2px solid var(--separator);
  border-radius: 5px;
}

.button:hover {
  color: var(--link);
  border-color: var(--link);
}
</style>
