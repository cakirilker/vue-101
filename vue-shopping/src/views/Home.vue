<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <product v-for="p in allProducts" v-bind:key="p.id" v-bind:p="p" class="product"></product>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import product from "@/components/Product";
export default {
  components: {
    product
  },
  mounted() {
    // this.getAllProducts();
    this.$store.dispatch("getAllProducts");
  },
  computed: {
    ...mapGetters(["allProducts"])
  },
  methods: {
    ...mapActions(["getAllProducts"])
  },
  name: "home"
};
</script>
