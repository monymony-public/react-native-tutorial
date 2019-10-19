---
layout: default
title: 3. Let's Make Multi Counter
parent: Redux Tutorial
grand_parent: State Management Tutorial
nav_order: 3
has_children: false
---

## Let's Make Multi Counter

 Let's look at `Redux` through the Multi Counter example, which has the function of `Add` and `Remove` which allows numbering to `increase` and `decrease` at each counter.
 
 ![ex_screenshot](../images/lets_make_01.gif)


### Directory structure
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

### `state` and `callback function`

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


### Design  
- `App.js`  
     > - Define the `Store`
     > - By connecting the top-level(root) component `App` with the data store `Store`.
         You can share the global data managed by `Store`.
      
- `/actions`  
     > Define `Action` and `Action Creator` 
     
     - Types of Actions 
         - `INCREMENT` : Have `type` and `index`.  
         - `DECREMENT` : Have `type` and `index`. 
         - `ADD` : Have `type`. 
         - `REMOVE` : Have `type`. 
  
- `/components`  
     > Responsible for DOM markup and style 
     
     It has the following pedantic structures:  
     ![ex_screenshot](../images/lets_make_02.png)  
  
- `/containers`  
     > Components that link `Redux` to the `presentational component`
    
- `/reducers`  
     > Define the change of data according to `Action` type as a pure function

