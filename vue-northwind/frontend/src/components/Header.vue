<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{name:'home'}">Home</router-link>
        <router-link class="navbar-item" :to="{name:'about'}">About</router-link>
        <router-link class="navbar-item" :to="{name:'products'}">Products</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
</style>
