<template>
  <div class="container is-fluid">
    <div class="notification">
      This container is
      <strong>fluid</strong>: it will have a 32px gap on either side, on any
      viewport size.
    </div>
    <!-- <button class="button is-primary" slot="trigger">Click me!</button> -->
    <OrderList/>
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
