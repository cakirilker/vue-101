<template>
  <div class="product-item">
    <router-link to="/">Back</router-link>
    <div class="product-title">
      {{ product.title }}
      <strong>$ {{ product.price }}</strong>
    </div>

    <div class="product-details">
      <div class="inventory">In Stock: {{ product.inventory}}</div>
      <button
        class="add-button"
        :disabled="!product.inventory"
        @click="addToCart(product)"
      >{{ product.inventory > 0 ? "Add to cart" : "Out Of Stock" }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.getAllProducts();

    // İzlediğim örnekte chart'a ekleme islemi esnasında store içerisinde ki 'all' state'i üzerinde inventory degeri degistirildigi için sayfa yüklendiğinde store içerisindeki all dolu olmuyor. Bunun için örnekte component'in mounted methodunda store içerisindeki getAllProducts cagirilip state dolduruluyor.

    // Normalde product sayfasında store kullanılmadan o sayfa için API'a istek atılır ve bilgisi cekilir gelen obje component'in data objesinde tutulabilir (mantıken). Asagıda buna benzer birsey yapılıyor.
    // let id = this.$route.params.id;
    // this.product = shop.getProduct(id);
  },
  computed: {
    ...mapGetters(["allProducts"]),
    product() {
      let id = this.$route.params.id;
      //   return this.$store.getters.getProduct(id);
      // Same as above.
      return this.$store.getters["getProduct"](id);
    }
  },
  methods: {
    ...mapActions(["getAllProducts", "addToCart"])
  }
};
</script>

<style>
</style>
