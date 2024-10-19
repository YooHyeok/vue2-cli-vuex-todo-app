<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    
    <AddTodo 
      @add-todo="addTodo"
    />
    <hr>
    <TodoList 
      :todos="todos"
      @toggle-checkbox="toggleCheckbox"
      @toggle-delete="deleteTodo"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue';
export default {
  components: {
    TodoList, AddTodo 
  },
  data() {
    return {
      todos: [
        { id: 1, text: 'buy a car', checked: false},
        { id: 2, text: 'play a game', checked: false},
      ]
    }
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
