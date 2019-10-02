---
layout: default
title: 2. MobX란?
parent: Mobx 튜토리얼
grand_parent: State Management Tutorial(한글)
nav_order: 1
---

## 2. MobX란?

> *Anything that can be derived from the application state, should be derived. Automatically.*

- 전역 상태 라이브러리
  - 모든 상태변화로 일어나는 부분을 자동으로 추적하는 것
  - 상태관리는 왜 필요한가?
    - 유지보수가 쉬워지도록 상태 로직을 분리하여 모듈화 할 수 있음
    - 상태관리의 단계를 간결하게 해줌
- 간단하고 확장 가능한 상태 관리 라이브러리를 철학으로 함

### MobX?

- React에 종속적인 라이브러리가 아님
- 아키텍처나 상태 컨테이너가 아닌 라이브러리
- redux와 다르게 store에 제한이 없음
- 또한 redux에서 해줘야했던 action 선언, connect, mapStateToProps, mapDispatchToProps등 번거로운 작업들은 데코레이터로 간단하게 대체
- observable을 기본적으로 사용하고 있음
- Mobx는 절대적으로 필요한 경우에만 state 변경

### Concepts

![overview](https://mobx.js.org/getting-started-assets/overview.png)

- State(Observable State) - 관찰 받고 있는 상태

  - 모델을 채우는 객체, 비객체, 원시, 참조의 그래프
  - 어플리케이션의 데이터 셀
  - 특정 부분이 바뀌면, MobX에서는 정확히 어떤 부분이 바뀌었는지 알 수 있음
  - 이 state의 변화는 **reaction**과 **computations**를 일으킴

- Derivation(Computed values) - 파생 값(연산된 값)

  - **Observable State**의 변화에 따른 값
  - 기존의 상태값과 다른 연산된 값에 기반하여 만들어질 수 있는 값
    - 특정값을 연산할 때에만 처리됨
  - 어플리케이션으로부터 자동으로 계산될 수 있는 모든 값
  - observable로부터 도출할 수 있음 값이 변경되면 자동으로 업데이트
  - 성능최적화를 위해 사용

- Reactions - 반응

  - **Observable State**의 변화에 따른 부가적인 변화
  - 값이 바뀜에 따라 해야 할 일을 정하는 것을 의미
  - 파생 값과 비슷하지만 값을 생성하지 않는 함수
  - 대체로 I/O 와 관련된 작업
  - 적당할 때 자동으로 DOM이 업데이트 되거나 네트워크 요청을 하도록 만듬

  - when, autorun, reaction

- Actions : 액션

  - **Observable State**가 사용자가 지정한 것을 포함한 모든 변경사항
  - 상태를 변경시키는 모든 것
  - MobX는 모든 사용자의 모든 사용자의 액션으로 발생하는 상태 변화들이 전부 자동으로 파생값(Derivation)과 리엑션(Reactions)으로 처리되도록 함

### Redux VS MobX

- Redux
  - 리엑트스러움 - 불변성 유지가 중요
  - flux 아키텍처를 따름
    - [flux](https://facebook.github.io/flux/) : 먼저 보낸 택배가 먼저 배송지에 도착해야 한다는 규제
      - 단일 스토어, 함수형 프로그래밍, 미들웨어
      - dispatch 관리를 위해 redux-thunk, redux-saga 등의 미들웨어가 필수 
  - 함수형 프로그래밍에 익숙하지 않으면 힘들 수 있음
  - action, reducer, dispatch...
- MobX
  - 객체지향적
  - 단일스토어를 강제하지 않음
  - 불변성을 신경쓰지 않아도 됨
  - 데코레이터 사용
  - Redux보다 사용이 쉬움
  - [몇가지 규칙](https://mobx.js.org/best/react-performance.html) 으로 최적화
    - 컴포넌트 단위를  작게 만들기
    -  리스트를 렌더링 할 땐 리스트 내용 외의 값이 props 로 들어가는것을 방지하기

### MobX 파헤쳐보기

- Function
  - observable
    - Observable State를 만듬
      - 관찰할 수 있는 변화가 일어나면 탐지함
    - 시간에 따라 변할 수 있는 값들을 MobX에게 알려주기 위해
  - computed
    - 연산된 값을 사용해야 할 때
    - 특정 작업을 처리하는 것이 아닌 의존하는 값이 바뀔 때 미리 값을 계산해놓고 조회할 때는 캐싱된 데이터 사용
    - 상태로부터 파생될 수 있는 것들을 확인하기 위해
  - reactions
    - when
      - observes가  true를 반환할 때 까지 실행하고 폐기
    - autorun
      - reaction이나 computed의 observer 대신에 사용 가능
      - autorun 으로 전달해주는 함수에서 사용되는 값이 있으면 자동으로 그 값을 주시하여 그 값이 바뀔 때 마다 함수가 주시되도록 해줌
        - 하나하나 observe 해주지 않아도 도ㅚㅁ
      - 관찰 가능한 상태에 의존하는 함수들을 자동으로 실행할 때 사용
        - 로깅이나 네트워크 요청에 유용
      - 한 번 동작되는 리엑션을 만들고 함수 안에서 사용되는 관찰 가능한 모든 데이터들이 변경될 때마다 자동으로 다시 실행
    - reaction
      - 특정 값이 바뀔 때 어떤 작업을 하고싶을 때 사용
      - autorun과 비슷, data-function과 side-effect-function을 accept함
  - action
    - 상태에 변화를 일으키는 것
    - 나중에 개발자도구에서 변화의 세부 정보를 볼 수 있음
    - 모든 액션이 끝난 다음에 reaction이 나타남
    - transaction
      - 액션으 한꺼번에 일으키는 것
    - untracked
      - establishing observers없이 코드 실행이 가능하도록 함
        - reaction과 같지만 computed's와는 다름
    - allowStateChanges
      - allow / disallow 상태를 변화함
      - By default allows `action` to make changes (and disallows for `computed` and `observer`)
- Observers
  - mobx-react 패키지 내부에 존재(mobx core의 일부가 아님)
  - 관찰 가능하게 만들어줌

- decorator 문법
  - 자바스크립트 사투리라고 생각하면 됨(정규 문법이 아님 - babel 플러그인을 통해서 쓸 수 있음)
  - @observable
    - MobX가 객체들을 관찰할 수 있도록 함
  - @observer
    - React 컴포넌트 render 함수를 autorun으로 감싸 자동으로 상태에 따라 컴포넌트가 동기되도록 만듬
    - mobx-react 패키지에 존재
    - 자동으로 효율적으로 업데이트함
  - @computed
    - 상태로부터 자동으로 파생되는 함수를 만들기 위해 사용
  - @actionn
    - 디버깅 할 때 액션에 대한 정보를 확인 할 수 있게 해줌
    - transaction 과 함께 사용시 여러 액션을 한꺼번에 발생시켜서 여러개의 업데이트를 한번의 작업으로 합쳐줄 수 있음
  - autorun

### 개발자도구

- https://github.com/mobxjs/mobx-react-devtools

### Reference

- https://mobx.js.org/getting-started.html
  - https://brunch.co.kr/@hee072794/93
- https://maksimivanov.com/posts/react-native-mobx-tutorial/
- https://maksimivanov.com/posts/react-native-mobx-tutorial-part-2/
- https://velog.io/@velopert/begin-mobx
- https://velopert.com/3707
- https://byseop.netlify.com/hello-mobx/