<script setup lang="ts">
import SubmitButton from './SubmitButton.vue'
import { inject } from 'vue'
import { ensureAllFields } from '../utils/registerUtils'
import { urlObj } from '@/utils/urlAddresses'
const store: any = inject('store') // fix type

const fieldsValid = { valid:true }

let email: string = ""
let username: string = ""
let password: string = ""
let repeatPassword: string = ""

async function submitRegister(e: any): Promise<void>{
  e.preventDefault()

  if (!ensureAllFields(email, username, password, repeatPassword) || !fieldsValid.valid) {
    return
  }

  let objectBody = {
    email,
    username,
    password,
    repeatPassword
  }

  try {
    const req = await fetch(urlObj.register, {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(objectBody)
    })
    const res = await req.json() 
    console.log(res)
  } catch (error) {
    console.log(error)
  }

  console.log(JSON.stringify(objectBody))
}

</script>

<template>
  <div class="register-form-container">
    <h2>Register</h2>
    <form class="register">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" @input="(e) => store.setEmail(e, email, fieldsValid)">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" @input="(e) => store.setUsername(e, username, fieldsValid)">
      <label for="passOne">Password:</label>
      <input type="password" id="passOne" v-model="password" @input="(e) => store.setPassword(e, password, fieldsValid, repeatPassword)">
      <label for="passTwo">Repeat password:</label>
      <input type="password" id="passTwo" v-model="repeatPassword" @input="(e) => store.setRepeatPass(e, repeatPassword, password, fieldsValid)">
      <SubmitButton buttonMessage="Register" :submit-fn="(e) => submitRegister(e)"/>
    </form>
  </div>
</template>

<style scoped>
.inputSuccess {
  border: 3px solid rgba(59, 112, 21, 0.77) !important;
  box-shadow: inset;
  transition: all 0.5s;
}
.inputError {
  border: 3px solid rgba(221, 26, 26, 0.77) !important;
  box-shadow: inset;
  transition: all 0.5s;
}
.register-form-container {
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