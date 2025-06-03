<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header class="header">
    <nav class="nav"><router-link to="/" class="nav-link">Главная</router-link>
<router-link to="/portfolio" class="nav-link">Портфолио</router-link>
      <router-link to="/prices" class="nav-link">Цены и услуги</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--dark-gray);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.nav-link {
  color: var(--light-gray);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.nav-link:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

.router-link-active {
  color: var(--accent);
  position: relative;
}
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent);
}
</style> 