<template>
  <div>
    <Login />
    <SignUp />
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";

export default {
    name: "Login",
    components: {
        Login,
        SignUp
    }
};
</script>

<style scoped>
</style>
