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
      this.$store.commit('TOGLE_TODO', {
        id: this.todo.id,
        checked: e.target.checked
      })
    },
    clickDelete() {
      // this.$store.commit('DELETE_TODO', this.todo.id) // mutation 호출
      this.$store.dispatch('deleteTodo', this.todo.id) // action 호출
    },
  },
};
</script>