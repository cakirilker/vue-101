<template>
  <div class="product-container">
    <p>
      <router-link :to="{name:'product',params: {id:p.id}}">{{p.title}}</router-link>
      <span class="price">$ {{ p.price }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["p"]
};
</script>

<style>
</style>
