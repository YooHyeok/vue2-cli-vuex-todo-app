# Vue 2 CLI - vuex를 활용한 TODO APP

<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">Vue CLI Install(Default)</summary>
<br>

- ### vue project 생성

  ```bash
  vue create {프로젝트명}
  ```

- ### 개발 환경 구축 옵션 선택
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset:
    Default ([Vue 3] babel, eslint)
  > Default ([Vue 2] babel, eslint)
    Manually select features
  ```

</details>

<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">절대경로 import 자동완성</summary>
<br>

  Ctrl + Spacebar를 타이핑하게 되면 자동완성이 뜬다.  
  일반적인 js의 경로는 ./으로 상대경로가 잡힌다.  
  vue에서는 @ 기호가 src 디렉토리를 참조하는 별칭으로 사용된다.  
  기본적으로 src의 별칭인 @/가 붙고 이후의 경로는 자동으로 완성해준다.

- ### Ctrl + Shift + P
  - settings.json
    ```json
      "javascript.preferences.importModuleSpecifier": "non-relative",
      "typescript.preferences.importModuleSpecifier": "non-relative",
    ```

</details>
<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">Vuex(store) install 및 적용</summary>
<br>

- ### 기본 명령어
  ```bash
  npm install vuex
  ```
  기본 명령어를 사용할 경우 최신버전인 4 버전이 설치 된다.  
  그러나 현재 vue 버전에서는 4 버전을 지원하지 않는다.  
  따라서 아래와 같이 진행한다.  

  (만약 이미 4 버전을 설치했다면 제거 후 진행하도록 한다.  )

- ### 제거 명령어
  ```bash
  npm uninstall vuex
  ```

- ### 3.1.3 설치 명령어
  ```bash
  npm install vuex/@3.1.3
  ```

- ### Store 구성
  ```js
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
    mutations: {

    },
    actions: {

    },
    getters: {

    }
  })
  ```

- ### Store 적용 (전역 등록)
  ```js
  import Vue from 'vue'
  import App from './App.vue'
  import store from './store'

  Vue.config.productionTip = false

  new Vue({
    store,
    render: h => h(App),
  }).$mount('#app')
  ```

</details>

<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">Vuex State</summary>
<br>

# 호출
state 변수는 vue 확장자 파일의 computed 속성에 호출하여 사용한다.  

computed는 함수 형태를 정의하고, template에 해당 함수를 할당 함으로 초기 렌더링시 computed에 정의 한 함수가 호출된다.  
또한, 내부적으로 data나 state의 변경을 감지하면 이를 의존하고 있는 computed에 정의한 함수가 다시 호출 된다.  
여기서 말하는 의존이란, 계산된 값이 어떤 다른값에 따라 달라진다는 의미로,  
computed 속성의 결과가 특정한 data 속성이나 vuex state값을 기준으로 결정될 때,  
그 값을 "의존성" 이라고 한다.  

이때 state 혹은 data 그 자체를 하나로 의존하는 것이 아니라 computed에서 참조하는 특정(세부) 대상을 지칭한다.  
data라면 data에 나열된 변수중 computed에서 정확히 참조하는 변수,  
vuex state라면 state에 나열된 변수중 computed에서 정확히 참조하는 변수를 말한다.  
데이터 변수의 경우 `return this.todo` 면 `todo`, `return this.user` 면 `user`가 computed의 의존성이고  
vuex state 변수의 경우 `return this.$store.state.todo` 면 `todo`, `return this.$store.state.user` 면 `user`가 computed의 의존성이 된다.  


- ### ___.vue
  ```html
  <template>
    {{ todos }}
  </template>
  <script>
    export default {
      computed: {
        todos() {
          return this.$store.state.todoss
        }
      }
    }
  </script>
  ```


</details>
<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">Vuex Mutations</summary>
<br>

# 정의
vuex에서 state에 있는 변수를 변경할때는 mutations 안에서 변경하는것이 규칙이다.
- ### Store
  ```js
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
    mutations: {
      ADD_TODO(state, payload) {
        state.todos.push({
          id: Math.random(),
          text: payload,
          checked: false
        })
      },
    },
    actions: {

    },
    getters: {

    }
  })
  ```
mutations 속성에 함수를 정의하고 해당 함수 블록에서 state에 접근하여 state를 변경한다.
이때 함수의 첫번째 매개변수로 state를, 두번째 매개변수로 payload를 받는다.
payload는 mutations의 함수가 호출될때 전달하는 값이다.

# 호출


- ### commit
  mutations를 vue 확장자 파일에서 호출할때는 methods 속성에서 함수를 정의하고, commit을 통해 호출한다.

  - #### ___.vue
    ```html
    <template>
      <button 
        @keyup.enter="addTodo"
      >
    </template>

    <script>
    export default {
      name: 'AddTodo',
      methods: {
        addTodo(e) {
          this.$store.commit('ADD_TODO', e.target.value) // mutation 호출
        },
      },
    };
    </script>
    ```
    첫번째 매개변수로는 mutations에 정의한 함수 이름, 두번째 매개변수로는 해당 함수의 두번째 매개변수인 payload 전달값을 할당할 수 있다.

</details>
<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">Vuex Actions</summary>
<br>

# 정의
Vuex에서 actions는 비즈니스로직 즉, 여러개의 mutations를 조합하여 호출하거나 비동기적인 로직을 처리할 때 사용한다.
여기서 말하는 비동기적인 로직은 fetch나 axios, jQuert의 ajax 뿐만 아니라 Promise객체, Async~Await 그 자체를 말한다.  

mutations에서 비동기 로직을 처리할 경우 mutations가 호출되고난 뒤, 비동기 로직이 종료되기 전 mutations의 함수 블록이 종료된다.  
state 변경을 보장받을 수 없고, getters같은 state 변경 감지에 대한 작업 처리에 영향을 주게 된다.

따라서 state의 직접적인 변경은 mutations에서 관리하고, 비동기적 작업은 actions에서 관리한다.  
(actions에서 비동기적인 작업 후 mutations를 commit-호출하는 flow로 설계할 수 있다.)


- ### Store
  ```js
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
    mutations: {
      ADD_TODO(state, payload) {
        state.todos.push({
          id: Math.random(),
          text: payload,
          checked: false
        })
      },
    },
    actions: {
      addTodo(context, payload) {
      const {commit, dispatch} = context;
      /* 비동기 작업 ex) axios(2초 소요) 후 commit 호출 */
      setTimeout(function() {
        commit('ADD_TODO', payload);
      }, 2000) //2초 후 실행
    },
    },
    getters: {

    }
  })
  ```
  
  actions함수는 매개변수로 context와 payload를 받는다.
  context에는 commit과 dispatch 함수가 존재한다.
  commit을 통해 mutations을 호출하고 dispatch를 통해 다른 actions 함수를 호출한다.

# 호출


- ### dispatch
  actions를 vue 확장자 파일에서 호출할때는 methods 속성에서 함수를 정의하고, dispatch를 통해 호출한다.

  - #### ___.vue
    ```html
    <template>
      <button 
        @keyup.enter="addTodo"
      >
    </template>

    <script>
    export default {
      name: 'AddTodo',
      methods: {
        addTodo(e) {
          this.$store.dispatch('addTodo', e.target.value) // action 호출
        },
      },
    };
    </script>
    ```
    첫번째 매개변수로는 actions에 정의한 함수 이름, 두번째 매개변수로는 해당 함수의 두번째 매개변수인 payload 전달값을 할당할 수 있다.

</details>
<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">Vuex getters</summary>
<br>

# 정의
Vuex에서 getters는 vue 인스턴스에서 computed와 비슷한 역할을 한다.  
연산된 state값을 접근하는 속성으로 여러 뷰 컴포넌트에서 재사용이 가능하다.   
computed와 같이 캐싱 기능이 있다.


- ### Store
  ```js
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
    mutations: {
    },
    actions: {
    },
    getters: {
      numberOfCompletedTodo(state) {
      return state.todos.filter(todo => todo.checked).length
    }
    }
  })
  ```
  getters에 정의한 함수는 첫번째 매개변수로 store의 state를 접근할 수 있다.  
  (호출부에서 전달하는것이 아님.)

# 호출

getters는 vue 인스턴스의 computed속성에 정의된 함수의 반환값에 호출하여 사용한다.
- ### ___.vue
  ```html
  <template>
    <div>
      Completed Todo: {{ numberOfCompletedTodo }}
    </div>
  </template>

  <script>
  export default {
    name: 'CompletedTodo',
    computed: {
      /* numberOfCompletedTodo() { // getters 적용 전 (state 직접 접근 후 연산)
          return this.$store.state.todos.filter(todo => todo.checked).length
      }, */
      numberOfCompletedTodo() {
        return this.$store.getters.numberOfCompletedTodo // getters 적용
      }
    },
  };
  </script>
  ```

</details>
<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">접은글 템플릿</summary>
<br>

- ### 예제코드

  ```html
  ```

- ### 예제코드
  ```js
  ```

</details>