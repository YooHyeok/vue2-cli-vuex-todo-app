<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo/>
    <AddTodo 
      @add-todo="addTodo"
    />
    <hr>
    <TodoList 
      @toggle-checkbox="toggleCheckbox"
      @toggle-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/vuex/components/TodoList.vue'
import AddTodo from '@/vuex/components/AddTodo.vue';
import CompletedTodo from '@/vuex/components/CompletedTodo.vue';

export default {
  components: {
    TodoList, AddTodo, CompletedTodo
  },
  methods: {
    addTodo(value) {
      this.todos.push({
        id: Math.random(),
        text: value,
        checked: false
      })
    },
    toggleCheckbox({id, checked}) {
      const index = this.todos.findIndex(todo => todo.id===id);
      this.todos[index].checked = checked;
      console.log(this.todos)
    },
    deleteTodo(id) {
      const index = this.todos.findIndex(todo => todo.id===id);
      this.todos.splice(index, 1)
    }
  }
}
</script>
