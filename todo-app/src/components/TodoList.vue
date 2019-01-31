<template>
  <div>
    <BaseInputText v-model="newTodoText" @keydown.enter="addTodo" placeholder="New Todo Item"></BaseInputText>
    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/>
    </ul>
    <p v-else>No to do.</p>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
import BaseInputText from "./BaseInputText";
// import axios from "axios";
import { HTTP } from "../http-common.ts";
export default {
  components: { TodoListItem, BaseInputText },
  data() {
    return {
      newTodoText: "",
      todos: []
    };
  },
  created() {
    let loader = this.$loading.show();
    HTTP.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => {
        loader.hide();
        this.todos = response.data;
      })
      .catch(e => {
        throw e;
      });
  },

  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({
          id: this.todos[this.todos.length - 1].id + 1,
          title: trimmedText,
          completed: false
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove;
      });
    }
  }
};
</script>

<style>
</style>
