import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'buy a car', checked: false},
      { id: 2, text: 'play a game', checked: false},
    ]
  },
  mutations: { // state 접근 및 변경 함수 정의
    ADD_TODO(state, payload) {
      console.log("payload: ", payload)
      state.todos.push({
        id: Math.random(),
        text: payload,
        checked: false
      })
    },
    TOGLE_TODO(state, payload) {
      console.log("payload: ", payload)
      const index = state.todos.findIndex(todo => todo.id===payload.id);
      state.todos[index].checked = payload.checked;
    },
    DELETE_TODO(state, payload) {
      console.log("payload: ", payload)
      const index = state.todos.findIndex(todo => todo.id===payload);
      state.todos.splice(index, 1)
      // state.todos = state.todos.filter(todo => todo.id!==payload);
    },
  },
  actions: {

  },
  getters: {

  }
})