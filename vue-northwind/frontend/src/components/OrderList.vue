<template>
  <div>
    <section>
      <b-field grouped group-multiline>
        <b-select v-model="perPage" :disabled="!isPaginated">
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="15">15 per page</option>
          <option value="20">20 per page</option>
        </b-select>
      </b-field>
    </section>
    <b-table
      :data="orders.length == 0 ? [] : orders"
      :paginated="isPaginated"
      :loading="isLoading"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      default-sort="customerId"
      ref="table"
      detailed
      detail-key="orderId"
      :opened-detailed="defaultOpenedDetails"
      :show-detail-icon="showDetailIcon"
      @details-open="toggleOrderDetails"
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
          centered
          sortable
          :custom-sort="sortByDate"
        >
          <span
            class="tag"
            :class="dateFormat(props.row.orderDate)"
          >{{ new Date(props.row.orderDate).toLocaleDateString() }}</span>
        </b-table-column>
        <b-table-column field="freight" label="Freight" sortable numeric>{{props.row.freight}}</b-table-column>
      </template>
      <OrderDetail slot="detail" slot-scope="{row}" :row="row"/>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_ORDERS, FETCH_ORDER } from "@/store/actions.type";
import OrderDetail from "@/components/OrderDetail";
export default {
  name: "OrderList",
  components: {
    OrderDetail
  },
  data() {
    return {
      isPaginated: true,
      isPaginationSimple: true,
      defaultSortDirection: "asc",
      currentPage: 1,
      perPage: 5,
      showDetailIcon: true,
      defaultOpenedDetails: []
    };
  },
  mounted() {
    this.fetchOrders();
  },
  computed: {
    ...mapGetters(["orders", "isLoading"])
  },
  methods: {
    fetchOrders() {
      this.$store.dispatch(FETCH_ORDERS);
    },
    fetchOrder(id) {
      this.$store.dispatch(FETCH_ORDER, id);
    },
    toggleOrderDetails(row, index) {
      this.defaultOpenedDetails = [row.orderId];
      this.$refs.table.toggleDetails(row);
      this.fetchOrder(row.orderId);
      this.$toast.open({
        message: `Order Selected: ${row.orderId}`,
        type: "is-success"
      });
    },
    dateFormat(value) {
      if (new Date(value).getTime() < new Date().getTime()) {
        return "is-danger";
      }
      return "is-success";
    },
    sortByDate(p1, p2, isAsc) {
      if (isAsc) {
        return (
          new Date(p2.orderDate).getTime() - new Date(p1.orderDate).getTime()
        );
      }
      return (
        new Date(p1.orderDate).getTime() - new Date(p2.orderDate).getTime()
      );
    }
  }
};
</script>

<style>
</style>
