---
layout: default
title: 3. Lifecycle
parent: Advanced TodoList App
grand_parent: Basic
nav_order: 3
---
## 3. Lifecycle with hooks
In this sample we will get dogs image when todo is added.

## Implement Lifecycle using useEffect()
There are 3 types of [Lifecycle by using Hooks](https://ko.reactjs.org/docs/hooks-effect.html) is componentDidMount, componentWillUpdate, componentWillUnmount.  see: [react-lifecycle-diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Here's the samples of 3 types of Lifecycle by using useEffect()
* componentDidMount
```javascript
    useEffect(() => {}, []);
```
* componentWillUpdate
```javascript
    useEffect(() => {}); // render when every state updates.
    useEffect(() => {}, [todos]) // render when todos of state updates.
```
* componentDidMount
```javascript
    useEffect(() => {}, []);
```

## Steps to build it
* Copy [master](https://github.com/JeffGuKang/react-native-tutorial)
* Go to /Examples/BasicTutorial/AdvancedFeatures/02-networking
* Install npm packages:
```
npm install 
```

[./pages/todoListPage/TodoListPage.js](https://github.com/JeffGuKang/react-native-tutorial/tree/master/Examples/BasicTutorial/AdvancedFeatures/03-lifecycle/pages/todoListPage/TodoListPage.js)

* Move todos of state ./todoListPage/todoList/TodoList.js to ./todoListPage/TodoListPage.js

```diff
const TodoListPage = props => {
+   // todo: { id: number, text: string, checked: boolean }
+   const [todos, setTodos] = useState([]);
    const [imageUrl, setImageUrl] = useState("https://facebook.github.io/react-native/img/tiny_logo.png");
    
   // componentWillUpdate
   // Get an Image when todos updates. 
    useEffect(() => {
        requestAdorablePomeranianImage();

        // componentWillUnmount
        return () => {
            // Cancel axios when componentWillUnmount()
            axios.cancel();
        }
-   }, [])
+   }, [todos])

    const requestAdorablePomeranianImage = () => {
        axios.get("pomeranian/images/random").then(res => {
            setImageUrl(res.data.message);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.titleImage} source={{ uri: imageUrl }} />
                <Text style={styles.title}>Hello Todolist</Text>
            </View>
-           <TodoList />
+           <TodoList todos={todos} setTodos={setTodos} />
        </View>
    )
}
```

[./pages/todoListPage/todoList/TodoList.js](https://github.com/JeffGuKang/react-native-tutorial/tree/master/Examples/BasicTutorial/AdvancedFeatures/03-lifecycle/pages/todoListPage/todoList/TodoList.js)

```diff
- import React, { useState, useEffect } from 'react';
+ import React, { useState } from 'react';
  import { StyleSheet, ScrollView, View } from 'react-native';
  import Item from './Item';
  import TextField from "./TextField";

- const TodoList = props => {
+ const TodoList = ({ todos, setTodos }) => {
-  // todo: { id: number, text: string, checked: boolean }
-  const [todos, setTodos] = useState([]);
   const [text, setText] = useState("");

   const onInputChangeHandler = text => {
     setText(text);
   };

   const addTodoHandler = e => {
     addTodo(text);
     setText('');
   };

   const addTodo = text => {
     if (!text) { return; }

     setTodos([
       ...todos,
       { id: Math.floor(Math.random() * 10000 + 1), text: text, checked: false },
     ]);
   };

   const removeTodo = id => {
     setTodos(todos.filter(todo => todo.id !== id));
   };

   const toggleCheckedTodo = id => {
     setTodos(
       todos.map(todo =>
         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
       ),
     );
   };

   const onRemoveButtonClickHandler = id => e => {
     removeTodo(id);
   }

   const onCheckButtonClickHandler = id => e => {
     toggleCheckedTodo(id);
   }

   return (
     <View>
       <TextField onSubmitEnd={addTodoHandler} value={text} onTextChange={onInputChangeHandler} />
       <ScrollView contentContainerStyle={styles.todoListContainer}>
         {todos.map((todo, index) => (
           <Item
             key={index}
             todo={todo}
             onRemove={onRemoveButtonClickHandler}
             onCheck={onCheckButtonClickHandler}
           />
         ))}
       </ScrollView>
     </View>
   );
 };
```
* Now you can get dogs photo when todos of state updates. try:
```
npm start
```

![](../images/updatePomeranianWhenTodosUpdates.gif "updatePomeranianWhenTodosUpdates")
