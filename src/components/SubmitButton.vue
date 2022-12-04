<script setup lang="ts">
  defineProps<{
    buttonMessage: string
    submitFn: (e: any) => void
  }>()
</script>

<template>
  <button class="submit-button" @click="(e) => submitFn(e)">Submit</button>
</template>

<style scoped>
.submit-button {
  display: block;
  margin: 0 auto;
  text-align: center;
  color: rgb(205, 204, 203);
  font-size: 18px;
  background-color: rgba(103, 100, 97, 0.332);
  border-radius: 10px;
  width: 45%;
  border: 2px solid rgb(189, 135, 0);
  padding: 12px;
  margin-top: 3rem;
  font-family: 'Roboto Mono', monospace;
  transition: all .7s;
}
.submit-button:hover {
  background-color: rgba(103, 100, 97, 0.515);
  text-shadow:
  0 0 12px rgb(189, 135, 0),
  0 0 11px rgb(189, 135, 0); 
  cursor: pointer;
  transition: all .7s;
}
</style>