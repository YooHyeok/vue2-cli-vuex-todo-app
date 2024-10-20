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
  기본 명령어를 사용할 경우 최신버전인 4 버전이 설치 된다.  
  그러나 현재 vue 버전에서는 4 버전을 지원하지 않는다.  
  따라서 아래와 같이 진행한다.  

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
