<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input 
      type="text" 
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addTodo"
      v-model="todoText"
    >
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
export default {
  components: {
    TodoList 
  },
  data() {
    return {
      todoText: '',
      todos: [
        { id: 1, text: 'buy a car', checked: false},
        { id: 2, text: 'play a game', checked: false},
      ]
    }
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false
      })
      this.todoText = '';
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
