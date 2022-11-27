<script setup lang="ts">
defineProps<{
  msg?: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="orange">{{ msg }}</h1>
    <h3>
      Welcome to Song Tracker
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

h1, h3 {
  margin: 0 auto;
}
.greetings {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
