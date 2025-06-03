<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style>
:root {
  --dark-bg: #1A1A1A;      /* Глубокий чёрный - для фона */
  --dark-gray: #2D2D2D;    /* Тёмно-серый - для секций */
  --light-gray: #E5E5E5;   /* Светло-серый - для текста */
  --accent: #C9A959;       /* Золотой - для акцентов */
  --white: #FFFFFF;        /* Белый - для заголовков */
}

html, body {
  margin: 0;
  padding: 0;
  background-color: var(--dark-bg);
}

.app {
  background-color: var(--dark-bg);
  min-height: 100vh;
}
</style>