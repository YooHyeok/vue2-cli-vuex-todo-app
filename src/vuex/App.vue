<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo/>
    <AddTodo />
    <hr>
    <TodoList />
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
}
</script>
