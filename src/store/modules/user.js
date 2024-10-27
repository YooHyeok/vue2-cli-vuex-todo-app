import axios from 'axios'

export default {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload
    }
  },
  actions: { // 비동기 작업 후 state 변경
    getUsers(context, payload) {
      const {commit, dispatch} = context;
      /* fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => 
        res.json()
      )
      .then(json => {
        commit('SET_USERS', json)
      }) */
      axios.get('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        commit('SET_USERS', res.data)
      })
    },
  }, 
}