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

    /* [map Helper] - mapState() : store의 state를 현재 컴포넌트의 computed 속성에 적용  */
    /* 명시적 참조 - 데이터 추가 가공 */
    // ...mapState({users: state => state.users}),
    // ...mapState({people: state => state.users}),
    /*  직접 참조 */
    // ...mapState(['users']), 
    // ...mapState({people: 'users'}),

    /* [modules] 적용 */
    /* 명시적 참조 - 데이터 추가 가공 */
    ...mapState({users: state => state.user.users}),
    ...mapState({people: state => state.user.users}),
  },
  created() {
    this.getUsers();
  },
  methods: {
    /* getUsers() { // map Helper 적용 전
      this.$store.dispatch('getUsers');
    } */

    /* [map Helper] - mapState() : store의 getUsers action 함수를 현재 컴포넌트의 methods 속성에 적용  */
    // ...mapActions(['getUsers']),
    /* [modules] 적용 */
    ...mapActions('user', ['getUsers']),
  }
};
</script>