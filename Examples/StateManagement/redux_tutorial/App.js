import React from 'react';
import EntryPoint from './app/EntryPoint';

/* 1. store를 생성하기 위해서 createStore 객체를 불러옵니다. */
import { createStore } from 'redux';

/* 2. store라는 장소에 스토어로의 접근에 대한 정보가 정의되어있는 reducer 모듈을 불러옵니다.*/
import reducers from './app/reducers';

/* 3. 컴포넌트들이 redux 스토어에 접근하거나 구독할 수 있어야하는데, 이를 편리하게 도와주는 react-redux에서 제공하는 특별 컴포넌트입니다.
*     컴포넌트의 root위치에 감싸줍니다.
*
*
*     Provider 컴포넌트를 사용하지 않는다면?
*       모든 컴포넌트들의 속성에 스토어를 넘겨줘야하는 불편함(?)이 있다.
*
*       관련된 더욱 자세한 설명을 볼 수 있습니다.
*       https://www.vobour.com/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A6%AC%EB%8D%95%EC%8A%A4%EC%99%80-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A6%AC%EB%8D%95%EC%8A%A4-react-redux-and-react-s1-fe3slg
* */
import { Provider } from 'react-redux';

/*
* 리덕스의 store는 리듀서인 상태트리를 저장합니다.
* 행동 지침(action)이 정의된 reducers를 전달해주는 createStore 객체는 데이터 관리/저장소 store가 생성됩니다.
* */
const store = createStore(reducers);

const App = () => {
    return (
        <Provider store={store}>
            <EntryPoint />
        </Provider>
    );
}

export default App;
