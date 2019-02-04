<template>
  <div v-if="order.OrderDetails.length > 0" class="columns">
    <div class="column is-full">
      <div class="columns is-multiline is-mobile">
        <div class="column is-10">
          <p>Shipment Address: {{ `${row.shipAddress} ${row.shipCity}/${row.shipCountry}`}}</p>
          <span>Employee:
            <b-tag type="is-info">{{ order.Employee.FirstName}} {{ order.Employee.LastName }}</b-tag>
          </span>
        </div>
        <div class="column is-2">
          <div class="column is-6 is-offset-6">
            <router-link class="button is-link is-outlined" :to="orderLink">Detail</router-link>
          </div>
        </div>
        <div class="column is-full">
          <OrderProducts :products="order.OrderDetails"/>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading..</div>
</template>

<script>
import { mapGetters } from "vuex";
import OrderProducts from "@/components/OrderProducts";
export default {
  name: "OrderDetail",
  components: {
    OrderProducts
  },
  props: {
    row: {
      type: Object
    }
  },
  computed: {
    ...mapGetters(["order"]),
    orderLink() {
      return {
        name: "orders",
        params: {
          id: this.order.OrderId
        }
      };
    }
  }
};
</script>

<style>
</style>
