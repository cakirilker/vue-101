<template>
  <div id="app" class="vld-parent">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <TodoList/>
    </div>
    <div></div>
  </div>
</template>

<script>
import TodoList from "../src/components/TodoList.vue";
export default {
  components: {
    TodoList
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
