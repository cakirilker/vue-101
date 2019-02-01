<template>
  <div v-if="orders.length">
    <section>
      <b-field grouped group-multiline>
        <b-select v-model="defaultSortDirection">
          <option value="asc">Default sort direction: ASC</option>
          <option value="desc">Default sort direction: DESC</option>
        </b-select>
        <b-select v-model="perPage" :disabled="!isPaginated">
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="15">15 per page</option>
          <option value="20">20 per page</option>
        </b-select>
      </b-field>
    </section>
    <b-table
      :data="orders"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :default-sort-direction="defaultSortDirection"
      default-sort="customerId"
    >
      <template slot-scope="props">
        <b-table-column
          field="orderId"
          label="ID"
          width="40"
          sortable
          numeric
        >{{ props.row.orderId }}</b-table-column>
        <b-table-column field="customerId" label="Customer ID" sortable>{{ props.row.customerId }}</b-table-column>
        <b-table-column field="shipName" label="Ship Name" sortable>{{ props.row.shipName }}</b-table-column>
        <b-table-column
          field="orderDate"
          label="Order Date"
        >{{ new Date(props.row.orderDate).toLocaleDateString() }}</b-table-column>
      </template>
    </b-table>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ORDERS } from "@/store/actions.type";
export default {
  name: "OrderList",
  data() {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: "asc",
      currentPage: 1,
      perPage: 5
    };
  },
  mounted() {
    this.fetchOrders();
  },
  computed: {
    ...mapGetters(["orders"])
  },
  methods: {
    fetchOrders() {
      this.$store.dispatch(FETCH_ORDERS);
    }
  }
};
</script>

<style>
</style>
