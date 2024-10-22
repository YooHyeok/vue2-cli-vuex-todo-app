<template>
  <input 
    type="text" 
    class="w-100 p-2" 
    placeholder="Type todo"
    @keyup.enter="addTodo"
    v-model="todoText"
  >
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      todoText: null,
    };
  },
  methods: {
    addTodo(e) {
      this.$store.commit('ADD_TODO', e.target.value)
      this.todoText = null
    },
  },
};
</script>