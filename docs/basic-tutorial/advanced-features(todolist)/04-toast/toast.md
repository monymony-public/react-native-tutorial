---
layout: default
title: 4. Toast
parent: Advanced TodoList App
grand_parent: Basic
nav_order: 4
---
## 4. Toast for both iOS and Android
In this sample we will show message through Toast which is alert message for both iOS and Android.

## Steps to build it
* Copy [master](https://github.com/JeffGuKang/react-native-tutorial)
* Go to /Examples/BasicTutorial/AdvancedFeatures/03-lifecycle
* Install npm packages:
```
npm install 
```
* Install react-native-toast-native from npm if you need it.

This one is requires in order to use Toast in iOS because React Native(<= 0.61) supports only [ToastAndroid](https://facebook.github.io/react-native/docs/toastandroid)  
```
 npm install react-native-toast-native
```
We will use [platform-specific-extensions](https://facebook.github.io/react-native/docs/platform-specific-code#platform-specific-extensions) because of supporting both platform.
* Create components folder in the root folder.
* Create toast.ios.js file in components folder.

[./components/toast/toast.ios.js](https://github.com/JeffGuKang/react-native-tutorial/blob/master/Examples/BasicTutorial/AdvancedFeatures/04-toast/components/toast/toast.ios.js)

```javascript
import Toast from 'react-native-toast-native';

const runToast = (message, duration, position) => {
    duration = duration === "LONG"
        ? duration = Toast.LONG
        : duration = Toast.SHORT;

    position = position === "TOP"
        ? position = Toast.TOP
        : position === "BOTTOM"
            ? position = Toast.BOTTOM
            : position === "CENTER"
                ? position = Toast.CENTER
                : position = Toast.BOTTOM;

    Toast.show(message, duration, position);
}

export default runToast;
```

* See here: [react-native-toast-native](https://github.com/onemolegames/react-native-toast-native#example-usage), you can see function ```Toast.show``` has several parameter, but we will use only three in this tutorial.
* Create toast.android.js file in toast folder.

[./components/toast/toast.android.js](https://github.com/JeffGuKang/react-native-tutorial/blob/master/Examples/BasicTutorial/AdvancedFeatures/04-toast/components/toast/toast.ios.js)

We will use ```ToastAndroid``` here:
```javascript
import { ToastAndroid } from 'react-native';

const runToast = (message, duration, position) => {
    duration = duration === "LONG"
        ? duration = ToastAndroid.LONG
        : duration = ToastAndroid.SHORT

    position = position === "TOP"
        ? position = ToastAndroid.TOP
        : position === "BOTTOM"
            ? position = ToastAndroid.BOTTOM
            : position === "CENTER"
                ? position = ToastAndroid.CENTER
                : position = ToastAndroid.BOTTOM;

    return ToastAndroid.showWithGravity(message, duration, position);
}

export default runToast;
```
You can see toast.ios.js and toast.android.js is slightly different.

* Now Create index.js file in toast folder.

[./components/toast/index.js](https://github.com/JeffGuKang/react-native-tutorial/blob/master/Examples/BasicTutorial/AdvancedFeatures/04-toast/components/toast/toast.ios.js)
```javascript
import runToast from "./toast";

export default runToast;
```

* Finally, we can show Toast when todo deletes.
 
[./pages/todoListPage/todoList/TodoList.js](https://github.com/JeffGuKang/react-native-tutorial/blob/master/Examples/BasicTutorial/AdvancedFeatures/04-toast/pages/todoListPage/todoList/TodoList.js)
```diff
 import React, { useState } from 'react';
 import { StyleSheet, ScrollView, View } from 'react-native';
 import Item from './Item';
 import TextField from "./TextField";
+ import runToast from "../../../components/toast"

const TodoList = ({ todos, setTodos }) => {
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
+    runToast(`${id}: is deleted!`, "LONG", "CENTER");
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

* Now try: 
```
npm start
```

![](../images/toast.gif "toast")
