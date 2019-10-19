---
layout: default
title: 2. What is MobX?
parent: MobX Tutorial
grand_parent: State Management Tutorial
nav_order: 2
---

## 2. What is MobX?

The `README` for MobX defines MobX as follows:

```
Anything that can be derived from the application state, should be derived. Automatically.
```

MobX is global statet library. All state changes are automatically tracked when it occur.

Why do we need to staet management library? First, you can modularize the state logic to make maintenance easier, Second, it simplifies the status management.

MobX has a simple, extensible state-management library as its philosophy.

### MobX Overview

The MobX has the following features:

- Not React-dependent Libraries
- Libraries that are not architecture or state containers
- Unlike redux, store is unrestricted
- And if you're using a decoder on MobX, you can simply replace the action declarations, connections, mapStateToProps, mapDispatchToProps, etc that had to be on the redux
- Using observable by default
- Mobx only changes state when absolutely necessary
- Built on Typescript

### Concept of MobX

![overview](../images/mobx-core-idea.png)

- State(Observable State) - state under observation
  - Graphs of objects, non-objects, reference that populate the model
  - Data cell of an application
  - When a specific part is changed, the MobX will know exactly what has changed.
  - Changes in this state cause **reaction** and **computations**

- Derivation(Computed values) - Derived value (calculated value)
  - Value of change in **Observable State**
  - Values that can be created based on computed values different from existing state values.
    - Processed only when calculating a specific value
  - Any value that can be automatically calculated from the application
  - Can be derived from ovservable Automatically update when value changes
  - Used to optimize performance

- Reactions
  - Additional changes as they change of **Observable State**
  - It means to set what needs to be done according to the change in value
  - A function similar to a derived value but not generating a value.
  - Tasks that are typically related to I/O
  - Automatically update DOM or make network requests when appropriate 
  - when, autorun, reaction

- Actions
  - All changes made, including what is user-specified by the **Observable State**
  - Everything that changes the state
  - MobX ensures that all changes in state resulting from actions by all users are automatically treated as Derivatives and Reactions

### Differences between Redux and MobX

- `Redux` is
  - React-like - Maintaining immutability is important
  - Follow flux architecture
    - [flux](https://facebook.github.io/flux/) : regulation that first-time parcels must first arrive at the shipping site
      - Single Store, Functionality Programming, Middleware
      - middleware such as redux-thunk, redux-saga is required for dispatch management
  - Difficulty when not familiar with functional programming
  - action, reducer, dispatch...
- `MobX` is
  - Object Oriented
  - Do not force single store
  - No need to worry about invariantness
  - Using Decorators
  - Easier to use than Redux
  - Optimize with [some rules](https://mobx.js.org/best/react-performance.html)
    - Make component units small
    - To prevent values other than the contents of a list from entering props when rendering list

### MobX Functions and Decorators

- Function
  - `observable`
    - Create Observable State
      - state that trying to observe
      - State changes cause reaction and computations
      - Detects when observable changes occur
    - To inform MobX of values that can change over time
  - `computed`
    - When you need to use the computed value
    - Use cached data when calculating and querying values in advance when they change dependent values rather than processing specific jobs
    - To identify what may be derived from the state
  - Reactions
    - `when`
      - Execute and discard until osserves returns true
    - `autorun`
      - Can be used in place of action or processed osserver
      - If there is a value used in a function that is passed to autorun, the value is automatically monitored so that the function is observed whenever the value changes
        - You don't have to observe one by one
      - Used to automatically execute functions dependent on observable conditions
        - Useful for logging or network requests
      - Create a single-activated reaction and automatically re-enable whenever all observable data used within the function changes
      - Used to create a reaction function that does not have observers itself
        - You need to connect from a reactive code to a command-type code, such as logging, persistence, or UI update code.
      - It looks similar to programmed, but it behaves completely differently
        - Computed is triggered according to the situation
        - With autorun, unconditionally re-triggers each time one of the dependencies changes
      - Function that should run automatically but does not present new value uses autorun
        - Mostly used for Log output
    - `reaction`
      - Used to do something when a specific value changes
      - autorun과 비슷, data-function과 side-effect-function을 accept함
  - Action
    - To cause a change in state
    - Later, you can see the details of the change in the developer tools
    - Action appears after all actions are completed
    - `transaction`
      - actuation at once
    - `untracked`
      - Enable code execution without esablishing ovservers
        - Same as reaction, but different from computed
    - `allowStateChanges`
      - Change of allow / disallow
      - By default allows `action` to make changes (and disallows for `computed` and `observer`)
  - `observer`
    - Exists inside the mobx-react package (not part of the MobX core)
    - Make observable

- decorator 
  - Think of it as a JavaScript dialect (not a regular grammer - it can be written through the Babel plug-in)
    - [To set up a decorator](https://jeffgukang.github.io/react-native-tutorial/docs/state-tutorial/mobx-tutorial/01-getting-started/getting-started-kr.html)
  - `@autobind`
    - Decorator that automatically enables javascript this bind without using arrow function
  - `@observable`
    - Allow MobX to observe objects
  - `@observer`
    - Autorun encloses the React Component render function to automatically synchronize components according to their state
    - mobx observable state 를 rerendring 하기위에 선언해준다
    - mobx-react 패키지에 존재
    - Automatically and efficiently update
  - `@computed`
    - Used to create a function that is derived automatically from the state
  - `@actionn`
    - Allows you to see information about action when debugging
    - When used in conjunction with transaction, multiple actions can be taken at once, bringing together multiple updates in one job
  - `@asyncAction`
    - Case of asynchronous
  - `@inject`
    - Same as Redux's Provider
      - In order to use props handed over from Redux to Provider, the component had to be wrapped in a container and mapSateToProps, mapDispatchToProps was written and made available.
      - However, it is simple to use as a @inject declaration in MobX
    - MobX Store to React Component

## MobX Developers Tools

- https://github.com/mobxjs/mobx-react-devtools

## Reference

1. [MobX 공식 튜토리얼](https://mobx.js.org/getting-started.html)
2. [MobX + Reat 10분 튜토리얼](https://brunch.co.kr/@hee072794/93)
3. [React Native Mobx Tutorial - Part 1](https://maksimivanov.com/posts/react-native-mobx-tutorial/)
4. [React Native Mobx Tutorial - Part 2](https://maksimivanov.com/posts/react-native-mobx-tutorial-part-2/)
5. [MobX 시작하기](https://velog.io/@velopert/begin-mobx)
6. [MobX 란? MobX 와 React](https://byseop.netlify.com/hello-mobx/)
