<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watch } from 'vue';

const APPEARANCE_KEY = 'vitepress-theme-appearance';
const MOUNT_ENABLE_ANIMATION_DELAY = 50;

const useDark = ref(true);
const preferDark = ref(true);
const mounted = ref(false);

watch([useDark, preferDark], ([newUseDark, newPreferDark]) => {
  if (newUseDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem(APPEARANCE_KEY, newPreferDark ? 'auto' : 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(APPEARANCE_KEY, newPreferDark ? 'light' : 'auto');
  }
});

onBeforeMount(() => {
  window.matchMedia('(prefers-color-scheme: dark)').onchange = (event) => {
    preferDark.value = event.matches;
  };
});

onMounted(() => {
  const savedTheme = localStorage.getItem(APPEARANCE_KEY);
  preferDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'light' || (savedTheme === 'auto' && !preferDark.value)) {
    document.documentElement.classList.remove('dark');
    useDark.value = false;
  } else {
    useDark.value = true;
  }
  setTimeout(() => {
    mounted.value = true;
  }, MOUNT_ENABLE_ANIMATION_DELAY);
});
</script>

<template>
  <div class="theme-toggle">
    <input
      id="theme-toggle-checkbox"
      v-model="useDark"
      type="checkbox"
      class="theme-toggle-checkbox"
    >
    <label
      for="theme-toggle-checkbox"
      class="theme-toggle-label"
    >
      <i class="fa-solid fa-moon"></i>
      <i class="fa-solid fa-sun"></i>
      <span :class="['theme-toggle-ball', { animation: mounted }]" />
    </label>
  </div>
</template>

<style>
.theme-toggle-checkbox {
  position: absolute;
  visibility: hidden;
}

.theme-toggle-label {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 28px;
  padding: 5px;
  cursor: pointer;
  background-color: var(--bg-sec);
  border: 2px solid var(--separator);
  border-radius: 50px;
}

.theme-toggle-label .fa-moon {
  color: #F1C40F;
}

.theme-toggle-label .fa-sun {
  color: #F39C12;
}

.theme-toggle-ball {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  background-color: var(--text);
  border-radius: 50%;
}

.theme-toggle-ball.animation {
  transition: transform 0.2s linear;
}

.theme-toggle-checkbox:checked + .theme-toggle-label .theme-toggle-ball {
  transform: translateX(28px);
}
</style>
