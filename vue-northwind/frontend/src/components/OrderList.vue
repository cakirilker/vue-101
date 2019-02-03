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
      <template slot="detail" slot-scope="props">
        <div class="columns">
          <div class="column is-1">
            <p class="image is-64x64">
              <img src="/static/img/placeholder-128x128.png">
            </p>
          </div>
          <div class="column is-11">
            <div class="columns is-multiline is-mobile">
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column is-half">
                <code>is-half</code>
              </div>
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
              <div class="column is-one-quarter">
                <code>is-one-quarter</code>
              </div>
            </div>
          </div>
        </div>
        <!-- <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="/static/img/placeholder-128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <div>
                <span>
                  Shipped Date:
                  <strong>{{ new Date(props.row.shippedDate).toLocaleDateString() }}</strong>
                  <small>@{{ props.row.employeeId }}</small>
                </span>
                <div>Address: {{ `${props.row.shipAddress} ${props.row.shipCity} ${props.row.shipCountry}`}}</div>
              </div>
            </div>
          </div>
        </article>-->
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
    ...mapGetters(["orders"])
  },
  methods: {
    fetchOrders() {
      this.$store.dispatch(FETCH_ORDERS);
    },
    toggleOrderDetails(row, index) {
      this.defaultOpenedDetails = [row.orderId];
      this.$refs.table.toggleDetails(row);
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
