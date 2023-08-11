<script setup lang="ts">
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/source-code-pro/400.css';
import '@fontsource/source-code-pro/400-italic.css';
import '@fontsource/source-code-pro/700.css';
import { onMounted, ref } from 'vue';
import HomePage from './pages/HomePage.vue';
import NavMenu from './menu/NavMenu.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import NotePage from './pages/NotePage.vue';
import SideMenu from './menu/SideMenu.vue';
import TopBar from './components/TopBar.vue';
import TopBarButton from './components/TopBarButton.vue';
import { useData } from 'vitepress';

const { page } = useData();
const FULL_HD_WIDTH = 1920;

const activeComponent = ref('');
const screenWidth = ref(FULL_HD_WIDTH);

function updateScreenWidth() {
  screenWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
  updateScreenWidth();
});
</script>

<template>
  <div class="wrapper">
    <TopBar
      v-if="screenWidth < 960"
      @activate="(component: string) => activeComponent = component"
    />
    <TopBarButton
      v-else-if="screenWidth < 1280"
      target="nav"
      icon="fa-bars"
      @activate="(component: string) => activeComponent = component"
    />
    <Transition>
      <SideMenu
        v-if="screenWidth >= 960 || activeComponent == 'side'"
        @jump="() => activeComponent = ''"
      />
    </Transition>
    <div class="content">
      <NotFoundPage v-if="page.isNotFound" />
      <HomePage v-else-if="page.filePath === 'index.md'" />
      <NotePage v-else />
    </div>
    <Transition>
      <NavMenu
        v-if="screenWidth >= 1280 || activeComponent == 'nav'"
        :small-screen="screenWidth < 1280"
        @jump="() => activeComponent = ''"
      />
    </Transition>
    <Transition>
      <div
        v-if="screenWidth < 1280 && activeComponent.length"
        class="darken"
        @click="() => activeComponent = ''"
      />
    </Transition>
  </div>
</template>

<style>
.wrapper {
  position: relative;
  display: flex;
}

.content {
  position: relative;
  min-height: 100vh;
}

@media (width < 960px) {
  .content {
    width: 100vw;
    min-width: 360px;
  }

  .topbar {
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 55px;
    background-color: var(--bg-sec);
    border-bottom: 2px solid var(--separator);
  }

  .sidemenu {
    position: fixed;
    left: 0;
    z-index: 3;
    display: block;
    width: 280px;
    height: 100vh;
    background-color: var(--bg-sec);
    border-right: 2px solid var(--separator);
  }

  .sidemenu.v-enter-active,
  .sidemenu.v-leave-active {
    transition: all 0.25s ease-out;
  }

  .sidemenu.v-enter-from,
  .sidemenu.v-leave-to {
    opacity: 0;
    transform: translateX(-280px);
  }
}

@media (width < 1280px) {
  .navmenu {
    position: fixed;
    right: 0;
    z-index: 3;
    display: block;
    width: 250px;
    height: 100vh;
    background-color: var(--bg-sec);
    border-left: 2px solid var(--separator);
  }

  .darken {
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
  }

  .navmenu.v-enter-active,
  .navmenu.v-leave-active,
  .darken.v-enter-active,
  .darken.v-leave-active {
    transition: all 0.25s ease-out;
  }

  .navmenu.v-enter-from,
  .navmenu.v-leave-to {
    opacity: 0;
    transform: translateX(250px);
  }

  .darken.v-enter-from,
  .darken.v-leave-to {
    opacity: 0;
  }
}

@media (width >= 960px) and (width < 1280px) {
  .navbutton {
    z-index: 1;
  }
}

@media (width >= 960px) {
  .content {
    width: calc(100vw - 280px);
  }

  .sidemenu {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
    background-color: var(--bg-sec);
  }
}

@media (width >= 1280px) {
  .content {
    width: 750px;
  }

  .navmenu {
    position: relative;
    display: block;
    flex-grow: 1;
    background-color: unset;
    border-left: unset;
  }

  .navbutton {
    display: none;
  }
}

@media (width >= 1440px) {
  .content {
    width: 850px;
  }
}

@media (width >= 1920px) {
  .content {
    width: 1000px;
  }
}
</style>
