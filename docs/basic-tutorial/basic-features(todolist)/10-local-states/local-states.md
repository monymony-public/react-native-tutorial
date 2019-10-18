---
layout: default
title: 10. Adding Local States
parent: Make TodoList Apps
grand_parent: Basic
nav_order: 10
---

## Adding Local State

To begin creating features such as adding, deleting todo items, we will start by defining a local state. This local state will have on property `todos` that will be used to indicate todo item's state.  todos object will have three properties as below

```
todos: {id: Number, textValue: string, checked: boolean }
```

- `id`: unique identification for the item
- `textValue`: contents of the item
- `checked`: if it is true, it means you completed the task on this item and vise versa

We will use `useState` to manage states.

`useState` is a Hook that lets you add React state to function components.

We need to import `useState` from `react`

```js
import React, {useState} from 'react';

const [todos, setTodos] = useState([]);
```

The only argument to the `useState()` Hook is the initial state. We can keep a number, a string or an array etc. In our example, we just want an array for storing todo item objects, so pass `[]` as initial state for our variable.

`useState` returns a pair of values as an array. First one is the the current state and second one is  a function that updates it. In our example, `todos` is the current state of our todo list and `setTodos` is the function that updates our todo list.
