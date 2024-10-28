<template>
  <div>
    Completed Todo: {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
  name: 'CompletedTodo',
  computed: {
    /* todos() { // getters 적용 전
      return this.$store.state.todos
    }, */
    numberOfCompletedTodo() {
      // return this.todos.filter(todo => todo.checked).length // getters 적용 전
      // return this.$store.getters.numberOfCompletedTodo // getters 적용
      return this.$store.getters['todo/numberOfCompletedTodo'] // modules 적용
    }
  },
};
</script>