<template>
  <div>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/cart">Cart ({{ cartCount }})</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>

<style>
</style>
