<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input type="text" class="w-100 p-2" placeholder="Type todo">
    <hr>
    <Todo/>
    <div>
      <input type="checkbox">
      <span class="ml-3">Buy a car</span>
    </div>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'
export default {
  components: {
    Todo 
  },
  data() {

  },
  methods: {

  }
}
</script>
