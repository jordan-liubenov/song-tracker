<script setup lang="ts"></script>

<template>
  <div class="register-form-container">
    <h2>Register</h2>
    <form class="register">
      <label for="email">Email:</label>
      <input type="text" id="email">
      <label for="username">Username:</label>
      <input type="text" id="username">
      <label for="passOne">Password:</label>
      <input type="password" id="passOne">
      <label for="passTwo">Repeat password:</label>
      <input type="password" id="passTwo">
      <button class="register-button">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.register-form-container{
  margin-top: 5rem;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgba(103, 100, 97, 0.093);
  width: 50%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 20px;
}

h2{
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

.register-button{
  display: block;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-size: 18px;
  background-color: rgba(103, 100, 97, 0.332);
  border-radius: 10px;
  width: 55%;
  border: 2px solid rgb(189, 135, 0);
  padding: 12px;
  margin-top: 3rem;
  text-shadow:
  0 0 12px rgb(189, 135, 0),
  0 0 11px rgb(189, 135, 0); 
}
.register-button:hover{
  background-color: rgba(103, 100, 97, 0.515);
  cursor: pointer;
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