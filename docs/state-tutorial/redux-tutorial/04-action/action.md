---
layout: default
title: 4. Action
parent: Redux Tutorial
grand_parent: State Management Tutorial
nav_order: 4
has_children: false
---

## `Action`

> - The only source of information at `Store` that tells us what changes are going to happen
> - An ordinary JavaScript object with an essential element of type, such as the name of an `Action`

### Basic Format of `Action`

`type` is an essential element of type, such as the name of an `Action`
```
{
	type : "[String constants that can distinguish between types of actions]",
	...
	... (You can add elements depending on the situation.),
	index,
	...
}
```

The action guide 'Action' object is used in the pure function 'reducer' that cleans up the situation and defines the 'state' change.

Used in the same form as `action.type`, `action.index`.

### Create and modify the file at the root location of the project as follows
```
mkdir app
cd app
mkdir actions
touch ActionTypes.js index.js
```


#### 액션 타입 정의

Since `type` is made with the same constant as text, it is easier to manage by creating and saving files separately.
		
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

#### Use of `Action`
Action guide `Action` tells `store` to change state by using the function `dispatch()` as follows

```
store.dispatch(() => add());
store.dispatch(() => remove());
```

`dispatch()` can be executed anywhere.
