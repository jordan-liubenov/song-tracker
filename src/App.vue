<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div class="wrapper">
      <!-- <HelloWorld msg="L"/> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  /* width: 100%; */
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  align-items: center;
  margin: 0 auto;
}

nav a.router-link-exact-active {
  color: rgba(215, 231, 221, 0.321);
  background-color: rgba(69, 66, 66, 0.423);
  border-radius: 5px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  margin: auto;
  padding: 0 2rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

nav {
  margin-left: -1rem;
  font-size: 1.1rem;
  padding: 1rem 0;
  margin-top: 1rem;
}

</style>
