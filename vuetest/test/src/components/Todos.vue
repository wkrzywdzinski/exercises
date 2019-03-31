<template>
  <div>
    <!-- v-for is loop for each item, left is place holder, right is the name of the props item -->
    <div v-for="item in todos">
      <!-- v-bind passes left "item" to TodoItem which is each item form "item in todos" -->
      <!-- v-on listens for deleteItem from Item passes emit from Todos to APP -->
      <TodoItem
        v-bind:item="item"
        v-on:deleteItem="$emit('deleteItem', item.id)"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
// needs a name, pass to props what you passed in the parent, left name
export default {
  name: "Todos",
  components: { TodoItem },
  props: ["todos"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
