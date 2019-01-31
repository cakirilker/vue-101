<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Globally Stored Variable in Default Module: {{ storedCount }}</p>
    <p>Globally Stored Variable in Todo Module: {{ defaultT }}</p>
    <button @click="printStoredCount">Print</button>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <p>
        Set Count:
        <input v-model="storedCount">
      </p>
      <!-- <button @click="setCount(20)">20</button> -->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
// You can declare the properties in the class or use a mapper like vuex-class
// https://github.com/vuejs/vue-class-component/issues/109
//  @Prop() private msg!: string;
@Component({
  computed: {
    storedCount: {
      get() {
        return this.$store.getters.safelyStoredCount;
      },
      set(val) {
        this.$store.dispatch("setCount", val * 1);
      }
    },
    ...mapGetters({
      // Import getter from store with different prop name.
      defaultT: "getDefaultTodo"
    })
  },
  methods: {
    printStoredCount() {
      // Accessing getter directly from store.
      console.log(this.$store.getters.safelyStoredCount);
      // Accessing getter from store by injecting mapGetters as computed property.
      console.log(this.storedCount);
    },
    // Import mutations from store that listed in array.
    // ...mapMutations(["decrement"]),
    // Import actions from store module
    ...mapActions(["increment", "setCount", "decrement"])
  }
})
export default class About extends Vue {}
</script>
