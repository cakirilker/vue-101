<template>
  <li>
    {{isDone}}-{{todo.title}}
    <button @click="$emit('remove',todo.id)">X</button>
    <input type="checkbox" v-model="todo.completed" :id="todo.id">
    <label :for="todo.id">{{ isDone }}</label>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    isDone() {
      return this.todo.completed ? "Done" : "Waiting";
    }
  }
};
</script>

<style>
</style>
