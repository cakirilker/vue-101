<template>
  <input type="text" class="input" :value="value" v-on="listeners" :placeholder="placeholder">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Type Here"
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.input {
  width: 100%;
  position: relative;
  padding: 8px 10px;
  border: 1px solid $vue-green;
}
</style>
