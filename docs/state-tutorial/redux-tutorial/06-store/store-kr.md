---
layout: default
title: 6. 스토어
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 6
has_children: false
---

## 04. 스토어 `Store`

> 데이터 `state` 를 관리하는 오직 한 곳

### store의 역할
 - Application의 `state` 를 저장
 - `store.getState()` 를 통해 상태에 접근 권한
 - `store.dispatch(action)` 를 통해 상태 수정 권한
 - `store.subscribe()` 
		 - 상태를 다시 업데이트 하고, 컴포넌트를 리렌더링하기 위해 store를 구독
 - `store.unsubscribe()`
		 -  컴포넌트가 언마운트(unmounted)될 때, store에서 listening를 해제(stop)하고, 메모리 누수(memory leak)을 막기 위해 사용
		 

### redux, react-redux 모듈 설치
모듈 패키지 설치를 위해 프로젝트의 root에서 다음을 입력해주세요.
```
$ npm install --save redux react-redux
```
 - `redux` : javascript 앱을 위한 상태 컨테이너
 - `react-redux`
	 -  react를 redux와 편하게 연결할 수 있게 해줍니다. 

### 예제
- `수정` App.js
		전체코드
	```
	import React from 'react';  
	import EntryPoint from './app/EntryPoint';  
	  
	import { createStore } from 'redux';  
	import reducers from './app/reducers';   
	import { Provider } from 'react-redux';  
 
	const store = createStore(reducers);  
	  
	const App = () => {  
	    return (  
	        <Provider store={store}>  
			  <EntryPoint /> 
		    </Provider>  
		);  
	}  
	  
	export default App;
	```

	#### 1. store를 생성하기 위해서 createStore과 reducer 모듈을 불러옵니다.
		
	```
	import { createStore } from 'redux';  
	import reducers from './app/reducers';  

	const store = createStore(reducers);  
	```

	#### 2. Provider 컴포넌트
	> 컴포넌트들이 `redux store` 에 접근하거나 구독(subscribe) 할 수 있어야하는데, 이를 편리하게 도와주는 `react-redux` 에서 제공하는 특별 컴포넌트입니다.  
	컴포넌트의 root위치에 감싸줍니다.
	```
	import { Provider } from 'react-redux';

	const App = () => {  
	    return (  
	        <Provider store={store}>  
			   <EntryPoint /> 
			</Provider>  
		);  
	}
	```
 - app/EntryPoint.js
	```
	import React from 'react';  
	import {StyleSheet, ScrollView} from 'react-native';  
	  
	import CounterContainer from './containers/CounterContainer';  
	  
	const EntryPoint = () => {  
	  return (  
	      <ScrollView style={styles.container}>  
			 <CounterContainer /> 
		  </ScrollView>  
	  );  
	}  
	  
	const styles = StyleSheet.create({  
	  container: {  
	    flex: 1,  
		width: '100%',  
	    backgroundColor: '#F6F6F6',  
	    paddingTop: '15%',  
	    paddingBottom : '15%',  
	  },  
	});  
	  
	export default EntryPoint;	 
   ```
