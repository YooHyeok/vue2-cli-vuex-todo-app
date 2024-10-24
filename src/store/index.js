import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'buy a car', checked: false},
      { id: 2, text: 'play a game', checked: false},
    ],
    users: []
  },
  mutations: { // state 접근 및 변경 함수 정의
    SET_USERS(state, payload) {
      state.users = payload
    },
    FETCH_ALL(state, payload) {
      const {taskAResult, taskBResult} = payload;
      // todos.push([...taskAResponse, ...taskBResponse])
      console.log([taskAResult, taskBResult])
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
    fetchAll(context, payload) {
      const {commit, dispatch} = context;
      const URL = 'http://jsonplaceholder.typicode.com/todos'
      Promise.all([fetch(`${URL}/${payload}`), fetch(`${URL}/${payload+1}`)])
      .then(([taskAResponse, taskBResponse]) => {
        Promise.all([taskAResponse.json(), taskBResponse.json()])
        .then(([taskAResult, taskBResult]) => {
          console.log(taskAResult)
          console.log(taskBResult)
          commit('FETCH_ALL', {taskAResult, taskBResult}); //state 변경
        })
      })
      .catch(e => {
        console.error('[ERROR][actions]Error in one of the tasks:', e);
      });
    },
    addTodo(context, payload) {
      const {commit, dispatch} = context;
      /* 비동기 작업 ex) axios(2초 소요) 후 commit 호출 */
      dispatch('fetchAll', 1); // action 함수에서 다른 action 함수를 호출할 경우 context의 dispatch를 사용
      setTimeout(function() {
        commit('ADD_TODO', payload);
      }, 2000) //2초 후 실행
    },
    toggleTodo(context, payload) {
      const {commit, dispatch} = context;
      /* 비동기 작업 ex) axios(2초 소요) 후 commit 호출 */
      setTimeout(function() {
        commit('TOGGLE_TODO', payload);
      }, 2000) //2초 후 실행
    },
    deleteTodo(context, payload) {
      const {commit, dispatch} = context;
      /* 비동기 작업 ex) axios(2초 소요) 후 commit 호출 */
      setTimeout(function() {
        commit('DELETE_TODO', payload);
      }, 2000) //2초 후 실행
    }
  },
  getters: {

  }
})