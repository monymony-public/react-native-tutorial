---
layout: default
title: 4. 액션
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 4
has_children: false
---

## 02. 액션 `action`

> 어떤 변화가 일어나야할지 알려주는 store의 유일한 정보원
>  action의 이름과도 같은 `type` 이라는 필수 요소를 가진 평범한 자바스크립트 객체

#### Action의 기본적인 포맷
필수 요소 :  Action의 이름과도 같은 `type` 
```
{
	type : "액션의 종류를 구분할 수 있는 문자열 상수",
	...
	... (상황에 따른 여러 요소 추가 가능합니다.),
	index,
	...
}
```

행동지침인 `Action` 객체는 상황 정리를 하여 `state`  변화를 정의하는 순수함수 `reducer`에서 사용되는데, `action.type`, `action.index` 와 같은 형태로 전달되어 쓰여집니다.


#### 해당 프로젝트의 root 위치에서 다음과 같이 파일 생성 후, 수정

- 액션 타입 정의
		`type` 은 문자와 같은 상수로 만들어지기 때문에 따로 파일을 만들어서 저장하면 관리가 편해집니다.
		app/ActionTypes.js
	```
	export const INCREMENT = 'INCREMENT';  
	export const DECREMENT = 'DECREMENT';  
	  
	export const ADD = 'ADD';  
	export const REMOVE = 'REMOVE';
	```
	


- 액션 생성자 정의
		app/index.js

	```
	import * as types from './ActionTypes';  
    
	export const increment = (index) => ({  
	    type : types.INCREMENT,  
		index,  
	});  
	  
	export const decrement = (index) => ({  
	    type : types.DECREMENT,  
	    index,  
	});  
	  
	export const add = () => ({  
	    type : types.ADD,  
	});  
	  
	export const remove = () => ({  
	    type : types.REMOVE,  
	});	
	```

#### Action의 사용
행동 지침인 `action`의 신호에 의해 `store` 에게 상태 변화를 해야한다고 알려주기 위해서 `dispatch()` 라는 함수가 실행되어야합니다.

```
dispatch(add);
dispatch(remove);
```
위 처럼, 바로 실행되게 하는 방법이 있지만 해당 튜토리얼에서는 `react-redux`의 `connect()` 와 같은 헬퍼를 통해서 접근할 것입니다.
