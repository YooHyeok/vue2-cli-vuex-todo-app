<template>
  <div>
    UserList
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UserList',

  computed: {
    /* users() { // map Helper 적용 전
      return this.$store.state.users;
    } */
    ...mapState(['users']), //map Helper 적용 - store의 state를 현재 컴포넌트의 computed 속성에 적용

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