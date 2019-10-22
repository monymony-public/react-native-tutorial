---
layout: default
title: 6. 스토어
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 6
has_children: false
---

## 스토어 `Store`

> - Application의 데이터 `state` 를 저장해서 전역에서 관리하는 한 곳.

### `Store` 의 기능
Application에 `state`를 제공하고, `state` 가 업데이트될 때마다 화면이 다시 렌더링 되게 합니다.

 - `store.getState()` : 애플리케이션의 현재 `state tree`에 접근하는 용도
 
 - `store.dispatch(action)` : 액션을 기반으로 state 변화를 일으키는 용도
 
 - `store.subscribe()` : state에서 변화를 감지하는 용도. 액션이 dispatch 될 때마다 호출됨.
 - `store.unsubscribe()`: 컴포넌트가 언마운트(unmounted)될 때, `store`에서 listening를 해제(stop)하고, 메모리 누수(memory leak)을 막기 위해 사용
		 

### `redux`, `react-redux` 모듈 설치
모듈 패키지 설치를 위해 프로젝트의 터미널에서 다음을 입력해주세요.
```
npm install --save redux react-redux
```
 - `redux` : javascript 앱을 위한 상태 컨테이너
 - `react-redux`
 
    `Provider 컴포넌트`와 `connect()() 함수` 를 제공하여 redux 사용을 더욱 편리하게 해줍니다.
    
    1. `Provider 컴포넌트`
        - 어플리케이션에 store 제공
        - root 컴포넌트부터 시작해서 전체 컴포넌트로 접근 가능한 `store`를 만듭니다.
        - 컴포넌트의 최상단에 있는 root 컴포넌트를 감싸서 컴포넌트의 자식들이 데이터에 접속할 수 있게 합니다.
        - Provider 패턴은 라이브러리가 데이터를 위에서 아래로 전달하게 해줍니다. 
            ```
            const store = createStore(리듀서);
            
            <Provider store={store}> 
                <root 컴포넌트 />
            </Provider>
            ```
    

### 예제
- `수정` App.js 전체코드
    ```
    import React from 'react';
    import CounterListContainer from './containers/CounterListContainer';
    
    import { createStore } from 'redux';
    
    import reducers from './reducers';
    import { Provider } from 'react-redux';
    
    const store = createStore(reducers);
    
    const App = () => {
        return (
            <Provider store={store}>
                <CounterListContainer />
            </Provider>
        );
    }
    
    export default App;
    ```

	#### 1. store를 생성하기 위해서 createStore과 reducer 모듈을 불러옵니다.
		
	```
	import { createStore } from 'redux';  
	import reducers from './reducers';  

	const store = createStore(reducers);  
	```

	#### 2. Provider 컴포넌트
	> - 컴포넌트들이 `redux store` 에 접근하거나 구독(subscribe) 할 수 있어야하는데, 이를 편리하게 도와주는 `react-redux` 에서 제공하는 특별 컴포넌트입니다.  
	> - 컴포넌트의 root위치에 감싸줍니다.
    ```
    import { Provider } from 'react-redux';
    
    const App = () => {
        return (
            <Provider store={store}>
                <CounterListContainer />
            </Provider>
        ;
    }
    ```