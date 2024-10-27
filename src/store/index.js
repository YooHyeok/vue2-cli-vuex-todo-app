import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo,user
  },
  mutations: { // state 접근 및 변경 함수 정의
    FETCH_ALL(state, payload) {
      const {taskAResult, taskBResult} = payload;
      // todos.push([...taskAResponse, ...taskBResponse])
      console.log([taskAResult, taskBResult])
    },
  },
  actions: { // 비동기 작업 후 state 변경
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
  },
})