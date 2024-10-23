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
    FETCH_ALL(state, payload) {
      const {taskAResponse, taskBResponse} = payload;
      todos.push([...taskAResponse, ...taskBResponse])
      console.log(todos)
    },
    ADD_TODO(state, payload) {
      console.log("payload: ", payload)
      state.todos.push({
        id: Math.random(),
        text: payload,
        checked: false
      })
    },
    TOGGLE_TODO(state, payload) {
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
  actions: { // 비동기 작업 후 state 변경
    fetchAll() {
      Promise.all([fetch(`/task-a/${payload}`), fetch(`/task-b/${payload}`)])
      .then(([taskAResponse, taskBResponse]) => {
        commit('FETCH_ALL', {taskAResponse, taskBResponse}); //state 변경
      })
      .catch(e => {
        console.error('[ERROR][actions]Error in one of the tasks:', e);
      });
    },
  },
  getters: {

  }
})