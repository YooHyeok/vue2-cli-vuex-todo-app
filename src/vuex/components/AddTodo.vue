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
      // this.$store.commit('ADD_TODO', e.target.value) // mutation 호출
      // this.$store.dispatch('addTodo', e.target.value) // action 호출
      this.$store.dispatch('todo/addTodo', e.target.value) // action 호출
      this.todoText = null
    },
  },
};
</script>