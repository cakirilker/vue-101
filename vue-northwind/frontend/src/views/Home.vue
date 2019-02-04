<template>
  <div>
    <section class="hero is-small is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Orders</h1>
          <h2 class="subtitle">List of orders</h2>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
      <OrderList class="orders-container"/>
    </div>
  </div>
</template>

<script>
import OrderList from "@/components/OrderList";
export default {
  name: "home",
  components: {
    OrderList
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.orders-container {
  margin-top: 20px;
}
</style>
