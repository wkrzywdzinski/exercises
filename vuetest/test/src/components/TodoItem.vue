<!-- v-for rendered this component for each item in Todos -->
<template>
  <!-- applies class is-complete when item.completed is true -->
  <div class="todo-item" v-bind:class="{ 'is-complete': item.completed }">
    <p>
      <!-- kind of event listener, function in methods -->
      <input type="checkbox" v-on:change="completeCheck" />
      {{ item.title }}
      <!-- emits message to parent -->
      <button @click="$emit('deleteItem', item.id)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"],
  methods: {
    completeCheck() {
      this.item.completed = !this.item.completed;
      console.log(this.item.completed);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-item {
  border: 2px solid black;
}
.is-complete {
  background: red;
}
</style>
