---
layout: default
title: 6. Store
parent: Redux Tutorial
grand_parent: State Management Tutorial
nav_order: 6
has_children: false
---

## `Store`

> - A place where the data `state` of the application is stored and managed all over

### 'Store' Functionality
Provide `state` to the application and render the screen again whenever the `state` is updated.

 - `store.getState()` : Application access to the current state tree
 
 - `store.dispatch(action)` : Application of state change based on action
 
 - `store.subscribe()` : Use to detect changes in state. Called each time an action is dispatched.
 - `store.unsubscribe()`: When components are unmounted, stop listening in `store` and prevent memory leakage
		 

### Install 'redux' and 'react-redux' modules
Enter the following in the project terminal to install the module package
```
npm install --save redux react-redux
```
 - `redux` : Status container for javascript apps
 - `react-redux`
 
    It provides `Provider Component` and `connect()()` functions to make using redux more convenient.    
    1. `Provider Component`
        - Providing store to application
        - Creating a `store` that can be accessed through the entire component, starting with the root component.
        - Wrapping the root component at the top of the component so that its children can access the data.
        - Provider patterns allow libraries to pass data from top to bottom.
            ```
            const store = createStore([reducer]);
            
            <Provider store={store}> 
                <[root component] />
            </Provider>
            ```
    

### 예제
- app/App.js
    ```
    import React from 'react';
    import CounterListContainer from './containers/CounterListContainer';
    
    import { createStore } from 'redux';
    
    import reducers from './reducers';
    import { Provider } from 'react-redux';
    
    const store = createStore(reducers);
    
    const App = () => {
        return (
            <Provider store={store}>
                <CounterListContainer />
            </Provider>
        );
    }
    
    export default App;
    ```

	#### 1. Create a store with `createStore` and `reducer`.
		
	```
	import { createStore } from 'redux';  
	import reducers from './reducers';  

	const store = createStore(reducers);  
	```

	#### 2. Provider Component
	> - Components should be able to access or subscribe to the `redux store`, which is a special component provided by `react-redux` that helps them conveniently.
	> - Cover the root position of the component.
    ```
    import { Provider } from 'react-redux';
    
    const App = () => {
        return (
            <Provider store={store}>
                <CounterListContainer />
            </Provider>
        ;
    }
    ```
