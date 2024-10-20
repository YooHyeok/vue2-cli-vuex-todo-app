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
