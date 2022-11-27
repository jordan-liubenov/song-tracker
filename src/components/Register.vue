<script setup lang="ts"></script>

<template>
  <div class="register-form-container">
    <h2>Register</h2>
    <form class="register">
      <label for="email">Email:</label>
      <input type="text" id="email">
    </form>
  </div>
</template>

<style scoped>
.register-form-container{
  margin-top: 2rem;
  font-size: 20px;
}

h2{
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
}

label{
  display: block;
  text-align: center;
}

input[type="text"]{
  margin: 0 auto;
  display: flex;
}
</style>