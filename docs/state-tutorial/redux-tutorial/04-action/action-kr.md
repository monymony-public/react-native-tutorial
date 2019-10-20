---
layout: default
title: 4. 액션
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 4
has_children: false
---

## 액션 `Action`

> - 어떤 변화가 일어나야할지 알려주는 `store` 의 유일한 정보원
> - `Action` 의 이름과도 같은 `type` 이라는 필수 요소를 가진 평범한 자바스크립트 객체

### Action의 기본적인 포맷
`Action` 의 이름과도 같은 `type` 속성을 필수적으로 갖는다.
```
{
	type : "액션의 종류를 구분할 수 있는 문자열 상수",
	...
	... (상황에 따른 여러 요소 추가 가능합니다.),
	index,
	...
}
```

행동 지침인 `Action` 객체는 상황 정리를 하여 `state`  변화를 정의하는 순수함수 `reducer`에서 사용되는데, `action.type`, `action.index` 와 같은 형태로 전달되어 쓰여집니다.

### Action의 사용
 - 행동 지침인 `Action`은 다음과 같이 `dispatch()` 라는 함수를 이용하여 `store` 에게 상태 변화를 해야한다고 알려줍니다. 
 - `state` 를 변형하기 위해 요구되는 최소한의 정보를 나타내기 때문에 작게 유지해야합니다.
 - Action에 따라 실행되는 `dispatch()` 함수는 어디서든 실행될 수 있습니다.
 - action 생성자 사용
    ```
    store.dispatch({ type : "INCREMENT", index });
    ```
    보통은 이렇게 직접적으로 사용하지 않고 `action`을 반환하는 함수인 Action 생성자를 사용합니다.
    ```
    store.dispatch(() => increment(index));
    ```
    
    해당 튜토리얼에서는 container Component에서 `mapDispatchToProps`이라는 함수 안에서 사용되어지며, [container and presentational 컴포넌트]() 에서 더 자세히 다룰 예정입니다.

### 예제

####  해당 프로젝트의 root 위치에서 다음과 같이 파일 생성
```
mkdir app
cd app
mkdir actions
touch ActionTypes.js index.js
```

#### 액션 타입 정의

`type` 은 문자와 같은 상수로 만들어지기 때문에 따로 파일을 만들어서 저장하면 관리가 편해집니다.
		
app/actions/ActionTypes.js

```
export const INCREMENT = 'INCREMENT';  
export const DECREMENT = 'DECREMENT';  
                          
export const ADD = 'ADD';  
export const REMOVE = 'REMOVE';
```
	
#### 액션 생성자 정의
app/actions/index.js
```
import * as types from './ActionTypes';

export const add = () => ({
    type : types.ADD
});

export const remove = () => ({
    type : types.REMOVE,
});

export const increment = (index) => ({
    type : types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type : types.DECREMENT,
    index
});
```

