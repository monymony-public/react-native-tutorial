---
layout: default
title: 7. Store
parent: Redux Tutorial
grand_parent: State Management Tutorial
nav_order: 7
has_children: false
---

# Store

> A place where the data `state` of the application is stored and managed all over.

### `Store` Functionality
Provide `state` to the application and render the screen again whenever the `state` is updated.

 - `store.getState()` : Application access to the current state tree
 - `store.dispatch(action)` : Application of state change based on action
 - `store.subscribe()` : Use to detect changes in state. Called each time an action is dispatched.
 - `store.unsubscribe()`: When components are unmounted, stop listening in `store` and prevent memory leakage
		 

## Example and Explain 

Check if the current location is `Examples/StateManagement/ReduxTutorial/app`.

Move `App.js` in the root position to `/app` and modify the code as follows.

- /index.js

    First you moved the `App.js` location, modify the `App.js` path in the `index.js` file in the Root location.
    ```
    import App from './app/App';
    ```

- /app/App.js
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

  ### Provider Component
    > - This component is provided by `react-redux` to enable components to access Redux's store.
    
    1. Create `Store` with `Reducer`.
        ```
        import reducers from './reducers';
        import { Provider } from 'react-redux';
            
        const store = createStore(reducers);
        ```
    
    2. Cover the top component `CounterListContainer` with the `Provider` component.
        ```
        import CounterListContainer from './containers/CounterListContainer';
        import { Provider } from 'react-redux';
        
        <Provider store={store}>
             <CounterListContainer />
        </Provider>
        ```

## Run and Test!

Now we completed this Example! 

Let's test!