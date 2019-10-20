---
layout: default
title: 5. 리듀서
parent: Redux Tutorial(한글)
grand_parent: State Management Tutorial(한글)
nav_order: 5
has_children: false
---

## 리듀서 `Reducer`

> 이전 state와 action에 따라서, 불변성을 가진 새로운 state를 반환해주는 순수함수.

#### 1. `Reducer`는 순수함수이다.
 - 반환값인 `state` 가 함수 인자인 `state`, `action` 에 의해서만 정의되는 함수.
 - `state`의 변화에 외부 요인이 영향을 주면 순수함수가 아닙니다.
 

```
const 리듀서-함수-이름 = (defaultstate, action) => {
    switch(action.type) {
        case "액션 타입 1" : 
            return ({
                [액션타입에 따라 변화된 state]
            });
        case "액션 타입 2" : 
            return ({
                [액션타입에 따라 변화된 state]
            });    
        ...
        return defaultstate;
    }
}
```

#### 2. `state`는 불변성을 갖는다.
`state` 는 트리 구조의 자료구조로 되어있기 때문에 직접 그 값을 변경해주기 위해서 깊이 있는 탐색(DFS)을 하게 될 수 있고 이에 따라 속성 전체를 비교하면 O(n) 만큼의 데이터를 비교 해야할 수 있습니다. 
이러한 이유로 `redux` 는 다음과 같은 변경 알고리즘이 적용되어있습니다.

 - `reducer` 를 거친 `state` 의 변경유무를 검사하기 위해 `state` 객체 주소를 비교하여 다른 주소값이라면 변경됐다고 감지합니다. 즉, 같은 주소 값이라면 변경했다고 감지되지않습니다.
 - `state` 값을 변경할 때 직접 값을 수정하지 않고 `state`의 복제본을 만들어 수정 후, 반환하는 방식을 사용합니다.
 - 즉, `state` 값의 변화가 있다면 불변성을 유지해주기 위해서 새로운 객체로 반환해줘야합니다.


#### 예제
 - 리듀서 함수 정의
 
	reducers/index.js

    ```
    /* 1. state의 기본 값(default)을 정의합니다. reducer의 인자에서만 선언할 수 있습니다. */
    const initialState = {
        counter : [
            {
                counterNum : 0,
            },
        ],
    };
    
    const counter = (state = initialState, action) => {
        const {counter} = state;
    
        switch(action.type) {
            case 'INCREMENT' :
                return({
                    counter : [
                        ...counter.slice(0, action.index),
                        {
                            counterNum : counter[action.index].counterNum + 1,
                        },
                        ...counter.slice(action.index+1, counter.length),
                    ]
                });
            case 'DECREMENT' :
                return ({
                    counter : [
                        ...counter.slice(0, action.index),
                        {
                            counterNum : counter[action.index].counterNum - 1,
                        },
                        ...counter.slice(action.index+1, counter.length)
                    ]
                });
            case 'ADD' :
                return ({
                    counter : [
                        ...counter,
                        {
                            counterNum : 0,
                        },
                    ]
                });
            case 'REMOVE' :
                return ({
                    counter : counter.slice(0, counter.length-1)
                });
    
            default :
                return state;
        }
    }
    
    
    export default counter;
    ```

- `INCREMENT`, `DECREMENT`   
   action으로 넘겨받은 index를 통해 counter 상태 객체를 재정의 해줍니다.
   - index 이전 값들 : ...counter.slice(0, action.index)
   - 해당 index 값 : { counterNum : count[action.index].counterNum + 1 혹은 -1}
   - index 이후 값들 : ...counter.slice(action.index+1, counter.length)
    
- `ADD`, `REMOVE`
   
   counter 상태객체에 이어 붙이거나, slice 함수를 이용하여 재정의 해줍니다.
    
