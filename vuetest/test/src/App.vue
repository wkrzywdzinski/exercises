<!-- html uses app.vue via main.js -->
<!-- component with capital letter import, pass to app and pass to compontents -->
<template>
  <div id="app">
    <Header />
    <!-- v-bind is passing the data -->
    <Todos v-bind:todos="todos" v-on:deleteItem="deleteTodo" />
  </div>
</template>

<script>
import Header from "./layout/Header";
import Todos from "./components/Todos";
export default {
  name: "app",
  components: {
    Todos,
    Header
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "todo one",
          completed: true
        },
        {
          id: 2,
          title: "todo two",
          completed: false
        },
        {
          id: 3,
          title: "todo three",
          completed: true
        }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      //imporant! returns array without the one with id
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>
<!-- global styling -->
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
