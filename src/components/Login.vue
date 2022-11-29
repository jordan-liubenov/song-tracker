<script setup lang="ts">
import { urlObj } from '@/utils/urlAddresses'
import SubmitButton from './SubmitButton.vue'
import { inject } from 'vue'

const store: any = inject('store') // fix type

let username: string = ""
let password: string = ""

async function submitLogin(e: any): Promise<void> {

}
</script>

<template>
  <div class="login-form-container">
    <h2>Login</h2>
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" @input="(e) => store.setUsernameLogin(e, username)">
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" @input="(e) => store.setPasswordLogin(e, password)">
    <SubmitButton buttonMessage="Login" :submitFn="(e) => submitLogin(e)" />
  </div>
</template>

<style scoped>
.inputError {
  border: 3px solid rgba(221, 26, 26, 0.77) !important;
  box-shadow: inset;
}
.login-form-container {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgba(103, 100, 97, 0.093);
  width: 50%;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 10px;
  border-radius: 10px;

  border: 54px solid rgba(103, 100, 97, 0.093);
}

h2 {
  display: block;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
  background-color: rgba(103, 100, 97, 0.332);
  width: 55%;
  border-radius: 10px;
  border: 2px solid rgb(189, 135, 0);

  text-shadow:
  0 0 12px rgb(189, 135, 0),
  0 0 11px rgb(189, 135, 0);
}
h2:hover {
  background-color: rgba(103, 100, 97, 0.515);
  transition: all .4s;
}

label{
  display: block;
  text-align: center;
  color: rgba(255, 255, 255, 0.801);
}

input[type="text"], input[type="password"]{
  margin: 0 auto;
  display: flex;
  background-color: rgba(186, 185, 183, 0.984);
  border: 1px solid  rgb(189, 135, 0);
  width: 30%;
  padding: 5px;
  margin-bottom: 15px;
  border-radius: 7px;
}

input[type="text"]:focus, input[type="password"]:focus{
  outline: none;
  background-color: rgba(220, 219, 215, 0.984);
  border: 3.5px solid  rgb(211, 152, 3);
  transition: all .5s;
}
</style>