<script setup> // setup = composition api
  import { ref, computed } from "vue";
  let password = ref("");
  let repeatPassword = ref(""); 

  const isDisabled = computed(() => {
    return password.value || repeatPassword.value ? password.value !== repeatPassword.value : true;
  })
</script>

<!-- <script> // no setup = options api
  export default {
    data() {
      return {
        password: "",
        repeatPassword: "",
      }
    },
    methods: {
    },
    computed: {
      isDisabled() {
        return (
          this.password || this.repeatPassword ? this.password !== this.repeatPassword : true
      )
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
    <button type="submit" :disabled="isDisabled">Sign up</button> <!-- v-bind -> : -->
  </form>
</template>
<style></style>
