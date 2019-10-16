---
layout: default
title: 3. Multi Counter를 만들어봅시다
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 3
has_children: false
---

## Multi Counter를 만들어봅시다

 각각의 카운터에서 숫자를 `increment` , `decrement` 할 수 있고 이 카운터를 여러개 만들 수 있는 `Add`, `Remove` 의 기능이 있는 Multi Counter 예제를 통해 `Redux`를 알아보겠습니다.
 
 ![ex_screenshot](../images/lets_make_01.gif)


### Directory 구조
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

### `state` 와 `callback 함수`
 - State 
    ```
    const initialState = {
        counter : [
            {
                counterNum : 0,
            },
        ],
    };
    ```
 - Callback
    - `handleIncrement`
    - `handleDecrement`
    - `handleAddCounter`
    - `handleRemoveCounter`    


### 설계  
- `App.js`  
     > - `Store` 정의
     > - `presentational` 의 최상단 컴포넌트인 `App` 과 `Store` 를 연결해주므로써, `Store` 가 관리하는 전역적인 데이터를 공유할 수 있게 됩니다.
      
- `/actions`  
     > 액션과 액션생성자 정의  
     
     - 액션의 종류  
         - `INCREMENT` : type과 index를 갖습니다.  
         - `DECREMENT` : type과 index를 갖습니다.  
         - `ADD` : type을 갖습니다.  
         - `REMOVE` : type을 갖습니다.  
  
- `/components`  
     > DOM 마크업과 스타일 담당  
     
     다음과 같은 계증적 구조를 갖고 있습니다.   
     ![ex_screenshot](../images/lets_make_02.png)  
  
- `/containers`  
     > `Redux`와 presentational 컴포넌트를 연결하는 컴포넌트  
    
- `/reducers`  
     > `Action` 타입에 따른 데이터의 변화를 순수함수로 정의

