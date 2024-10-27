export default {
  namespaced: true,
  state: {
    todos: [
      { id: 1, text: 'buy a car', checked: false},
      { id: 2, text: 'play a game', checked: false},
    ],
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
    addTodo(context, payload) {
      const {commit, dispatch} = context;
      /* 비동기 작업 ex) axios(2초 소요) 후 commit 호출 */
      dispatch('fetchAll', 1, { root: true /* global(index.js) action 호출 */}); // action 함수에서 다른 action 함수를 호출할 경우 context의 dispatch를 사용
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
  getters: { // 컴포넌트의 computed에서 사용한다. (재사용 가능) computed처럼 캐싱기능 있음.
    numberOfCompletedTodo(state) {
      return state.todos.filter(todo => todo.checked).length
    }
  }
}