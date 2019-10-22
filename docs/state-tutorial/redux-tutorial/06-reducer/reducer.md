---
layout: default
title: 6. Reducer
parent: Redux Tutorial
grand_parent: State Management Tutorial
nav_order: 6
has_children: false
---

# Reducer
A pure function that returns a new state with invariant according to the previous state and action.

## Example 
app/reducers/index.js
```
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
   Override counter state object through index passed over by action.
   - Array value from 0 to index-1 : ...counter.slice(0, action.index)
   - Array[index] : { counterNum : count[action.index].counterNum + 1 혹은 -1}
   - Array value from index+1 to last : ...counter.slice(action.index+1, counter.length)
    
- `ADD`, `REMOVE`
   
   Add to counter state object or redefine using the slice function.

## What is Reducer?

### 1. `Reducer` is a pure function.
 - A function that is defined only by the function factors `State` and `Action`.
 - If external factors influence changes in `State`, it is not a pure function.
 
```
const reducer_name = (defaultstate, action) => {
    switch(action.type) {
        case "action type 1" : 
            return ({
                [State changed according to action type]
            });
        case "action type 2" : 
            return ({
                [State changed according to action type]
            });    
        ...
        return defaultstate;
    }
}
```

### 2. `state` is immutable.
Since `state` is the data structure of the tree structure, it can be done in-depth exploration (DFS) to change the value directly, and thus it may be necessary to compare as much data as O(n) when comparing the entire properties.
For this reason, `redux` is applied with the following change algorithm.

 - `redux` compare changed `state` object addresses and detect that the address value is changed if it is different from the existing `state`. In other words, if it is the same address value, it is not detected that it has been changed.
 - When changing the value of `state`, it is used to create a replica of 'state', modify it, and return it.
 - In other words, if there is a change in the value of `state`, it must be returned as a new object to maintain its immutability.
    
