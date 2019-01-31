<template>
  <div class="cart">
    <p v-show="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <div v-show="products.length">
      <table>
        <thead>
          <th>Name</th>
          <th>Quantity</th>
          <th>Per Unit</th>
          <th>Total</th>
        </thead>
        <tbody>
          <tr v-for="p in products" v-bind:key="p.id">
            <td>
              <router-link :to="{name:'product',params:{id:p.id}}">{{p.title}}</router-link>
            </td>
            <td>$ {{ p.price }}</td>
            <td>{{ p.quantity }}</td>
            <td>$ {{ p.price * p.quantity }}</td>
          </tr>
          <tr class="total">
            <td>
              <b>TOTAL</b>
            </td>
            <td></td>
            <td></td>
            <td>$ {{ total }}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <button
          :disabled="!products.length"
          @click="checkout(products)"
          class="checkout-button"
        >Checkout</button>
      </p>
    </div>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products: "cartProducts"
    }),
    total() {
      return this.products
        .reduce((total, p) => {
          return total + p.price * p.quantity;
        }, 0)
        .toFixed(2);
    },
    checkoutStatus() {
      return this.$store.state.cart.lastCheckout;
    }
  },
  methods: {
    ...mapActions(["checkout"])
  }
};
</script>

<style>
</style>
