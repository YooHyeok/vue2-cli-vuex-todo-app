<template>
  <div>
    Completed Todo: {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
  name: 'CompletedTodo',
  computed: {
    todos() {
      return this.$store.state.todos
    },
    numberOfCompletedTodo() {
      return this.todos.filter(todo => todo.checked).length
    }
  },
};
</script>