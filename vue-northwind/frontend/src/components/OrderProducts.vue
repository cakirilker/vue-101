<template>
  <b-table :data="isEmpty ? [] : products" :bordered="true">
    <template slot-scope="props">
      <b-table-column field="ProductId" label="ID" width="40" numeric>{{ props.row.ProductId }}</b-table-column>
      <b-table-column
        field="Product.ProductName"
        label="Product Name"
      >{{ props.row.Product.ProductName }}</b-table-column>
      <b-table-column field="Quantity" label="Quantity">{{ props.row.Quantity }}</b-table-column>
      <b-table-column
        field="Product.UnitPrice"
        label="Unit Price"
      >${{ props.row.Product.UnitPrice }}</b-table-column>
      <b-table-column field="Discount" label="Discount">{{ props.row.Discount }}%</b-table-column>
      <b-table-column label="Total">{{ discountedTotal(props.row) }}</b-table-column>
    </template>
    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon icon="emoticon-sad" size="is-large"></b-icon>
          </p>
          <p>Empty Order.</p>
        </div>
      </section>
    </template>
  </b-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "OrderProducts",
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters(["order"]),
    sortedProducts() {
      //   return this.order.OrderDetails.sort((a, b) =>
      //     a.Quantity > b.Quantity ? 1 : b.Quantity > a.Quantity ? -1 : 0
      //   );
    },
    isEmpty() {
      return (
        this.order.OrderDetails == null || this.order.OrderDetails.length == 0
      );
    }
  },
  methods: {
    discountedTotal({ Quantity, Discount, Product }) {
      let price = Quantity * Product.UnitPrice;
      return price - Discount * price;
    }
  }
};
</script>

<style>
</style>
