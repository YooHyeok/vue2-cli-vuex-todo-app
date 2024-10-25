<template>
  <div>
    UserList
    <div v-for="user in people" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserList',

  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.$store.dispatch('getUsers');
    }
  }
};
</script>