---
layout: default
title: 3. Multiple Counter를 만들어봅시다
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 3
has_children: false
---

# Multiple Counter를 만들어봅시다

 각각의 카운터에서 숫자를 `increment` , `decrement` 할 수 있고 이 카운터를 여러개 만들 수 있는 `Add`, `Remove` 의 기능이 있는 Multiple Counter 예제를 통해 `Redux`를 알아보겠습니다.
 
 ![lets_make_01](../images/lets_make_01.gif)


## Directory 구조
```
ㄴ /app
  ㄴ /actions
     ActionTypes.js
     index.js
  ㄴ /components
     App.js 
     Counter.js
     CounterList.js
  ㄴ /containers
     CounterListContainer.js
  ㄴ /reducers
     index.js
  App.js
index.js
```


## 설계  
- `App.js`  
     - `Store` 정의
     - 컴포넌트 트리구조의 가장 위에 있는(root-level component) `CounterListContainer` 과 `Store` 를 연결해주므로써, `Store` 가 관리하는 전역적인 데이터를 공유할 수 있게 됩니다.
      
- `/actions`  
     > 액션과 액션생성자 정의  
     
     - 액션의 종류  
         - `INCREMENT` : type과 index를 갖습니다.  
         - `DECREMENT` : type과 index를 갖습니다.  
         - `ADD` : type을 갖습니다.  
         - `REMOVE` : type을 갖습니다.  
  
- `/components`  
     > Presentational 컴포넌트
     > DOM 마크업과 스타일 담당
      
- `/containers`  
     > `Redux`와 presentational 컴포넌트를 연결하는 컴포넌트  
    
- `/reducers`  
     > `Action` 타입에 따른 데이터의 변화를 순수함수로 정의


## State 와 Callback 함수
 - State 
    ```
    counter : [
        {
            counterNum : 0
        },
    ]
    ```
 - Callback
    - `handleIncrement`
    - `handleDecrement`
    - `handleAddCounter`
    - `handleRemoveCounter`  
    