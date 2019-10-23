---
layout: default
title: 7. 스토어
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 7
has_children: false
---

# 스토어

> Application의 데이터 `State` 를 저장해서 전역에서 관리하는 한 곳.

## 스토어(Store)의 기능
Application에 `state`를 제공하고, `state` 가 업데이트될 때마다 화면이 다시 렌더링 되게 합니다.

 - `store.getState()` : 애플리케이션의 현재 `state tree`에 접근하는 용도
 - `store.dispatch(action)` : 액션을 기반으로 state 변화를 일으키는 용도
 - `store.subscribe()` : state에서 변화를 감지하는 용도. 액션이 dispatch 될 때마다 호출됨.
 - `store.unsubscribe()`: 컴포넌트가 언마운트(unmounted)될 때, `store`에서 listening를 해제(stop)하고, 메모리 누수(memory leak)을 막기 위해 사용
		 

## 예제 및 설명

현재 위치가 `Examples/StateManagement/ReduxTutorial/app` 인지 확인합니다.

Root 위치에 있는 `App.js` 를 `/app` 으로 이동한 후, 다음과 같이 코드를 수정합니다.

- /index.js

    먼저 App의 위치를 이동했으니 Root 위치에 있는 index.js 파일에서 App의 경로를 수정합니다.
    ```
    import App from './app/App';
    ```

- /app/App.js
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

  ### Provider 컴포넌트
    > - `react-redux` 에서 제공하는, 컴포넌트들이 Redux의 Store에 접근 가능하도록 해주는 컴포넌트입니다.
    > - 컴포넌트의 root 위치에 감싸줍니다.
    
    1. `Reducer`를 담은 `Store`를 만들어줍니다.
        ```
        import reducers from './reducers';
        import { Provider } from 'react-redux';
            
        const store = createStore(reducers);
        ```
    
    2. 최상단에 있는 컴포넌트인 `CounterListContainer` 를 `Provider` 컴포넌트로 감싸줍니다.
        ```
        import CounterListContainer from './containers/CounterListContainer';
        import { Provider } from 'react-redux';
        
        <Provider store={store}>
             <CounterListContainer />
        </Provider>
        ```

## 실행 및 테스트
이제 코드 작성을 다 했으니, 실행해볼까요?
