<template>
  <div>
    <Todo 
      v-for="todo in todos" 
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
import Todo from '@/vuex/components/Todo.vue'

export default {
  name: 'TodoList',
  components: {
    Todo 
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
};
</script>