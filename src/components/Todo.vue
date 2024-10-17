<template>
  <div>
    <input type="checkbox" :checked="todo.checked" @input="toggleCheckbox">
    <span class="ml-3">{{ todo.text }}</span>
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
    }
  },
};
</script>