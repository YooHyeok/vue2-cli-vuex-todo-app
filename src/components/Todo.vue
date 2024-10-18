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
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    toggleCheckbox(e) {
      this.$emit('toggle-checkbox', {
        id: this.todo.id,
        checked: e.target.checked
      })
    },
  },
};
</script>