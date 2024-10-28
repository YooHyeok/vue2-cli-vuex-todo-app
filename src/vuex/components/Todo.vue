<template>
  <div class="mb-2 d-flex">
    <div>
      <input type="checkbox" 
        :checked="todo.checked" 
        @input="toggleCheckbox"
      >
    </div>
      <span 
        class="ml-3 flex-grow-1"
        :class="todo.checked ? 'text-muted' : ''"
        :style="todo.checked ? 'text-decoration: line-through' : ''"
      >
        {{ todo.text }}
      </span>
      <button 
        class="btn btn-danger btn-sm"
        @click="clickDelete"
      >DELETE</button>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },

  methods: {
    toggleCheckbox(e) {
      const id = this.todo.id;
      const checked = e.target.checked;
      // this.$store.commit('TOGGLE_TODO', {id, checked}) // mutation 호출
      // this.$store.dispatch('toggleTodo', {id, checked}) // action 호출
      this.$store.dispatch('todo/toggleTodo', {id, checked}) // action 호출
    },
    clickDelete() {
      // this.$store.commit('DELETE_TODO', this.todo.id) // mutation 호출
      // this.$store.dispatch('deleteTodo', this.todo.id) // action 호출
      this.$store.dispatch('todo/deleteTodo', this.todo.id) // action 호출
    },
  },
};
</script>