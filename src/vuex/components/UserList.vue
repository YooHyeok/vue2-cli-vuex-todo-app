<template>
  <div>
    <b>UserList</b>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
    <b>PeopleList</b>
    <div v-for="user in people" :key="user.id">
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
    ...mapState({people: 'users'}), //map Helper - users state를 다른 이름으로 변경

  },
  created() {
    this.getUsers();
  },
  methods: {
    /* getUsers() { // map Helper 적용 전
      this.$store.dispatch('getUsers');
    } */
    ...mapActions(['getUsers']), //map Helper 적용 - store의 getUsers action 함수를 현재 컴포넌트의 methods 속성에 적용
  }
};
</script>