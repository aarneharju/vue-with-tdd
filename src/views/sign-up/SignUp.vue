<script setup> // setup = composition api
  import { ref } from "vue";
  let password = ref("");
  let repeatPassword = ref(""); 

  const isDisabled = () => {
    return password.value || repeatPassword.value ? password.value !== repeatPassword.value : true;
  }
</script>

<!-- <script> // no setup = options api
  export default {
    data() {
      return {
        buttonDisabled: true,
        password: "",
        repeatPassword: "",
      }
    },
    methods: {
      onChangePassword(event) {
        if (event.target.id === "password") {
          this.password = event.target.value;
        }
      
        if (event.target.id === "repeat-password") {
          this.repeatPassword = event.target.value;
        }
        this.buttonDisabled = this.password !== this.repeatPassword;
      }
    }
  }
</script> -->

<template>
  <h1>Sign Up</h1>
  <form>
    <div>
      <label for="username" hidden>Username:</label>
      <input type="text" id="username" placeholder="Username" aria-label="username"></input>
    </div>
    <div>
      <label for="email" hidden>Email:</label>
      <input type="email" id="email" placeholder="Email"></input>
    </div>
    <div>
      <label for="password" hidden>Password:</label>
      <input type="password" id="password" placeholder="Password" v-model="password"></input>
    </div>
    <div>
      <label for="repeat-password" hidden>Repeat password:</label>
      <input type="password" id="repeat-password" placeholder="Repeat password" v-model="repeatPassword"></input> <!-- v-on -> @ -->
    </div>
    <button type="submit" :disabled="isDisabled()">Sign up</button> <!-- v-bind -> : -->
  </form>
</template>
<style></style>
