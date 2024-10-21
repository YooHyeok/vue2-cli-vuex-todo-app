<template>
  <div>
    <Todo 
      v-for="todo in todos" 
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @toggle-delete="deleteTodo"
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
  methods: {
    toggleCheckbox(value) {
      this.$emit('toggle-checkbox', value)
    },
    deleteTodo(todoId) {
      this.$emit('toggle-delete', todoId)
    },
  },
};
</script>