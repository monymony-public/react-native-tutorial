---
layout: default
title: 5. Shuffle todos
parent: Advanced TodoList App
grand_parent: Basic
nav_order: 5
---
## 5. Shuffle todos
In this sample we will shuffle todos when you clicks shuffle icon button.

## Steps to build it
* Copy [master](https://github.com/JeffGuKang/react-native-tutorial)
* Go to /Examples/BasicTutorial/AdvancedFeatures/04-shuffle
* Install npm packages:
```
npm install 
```

* Create util folder in the root.
* Create shuffle.js file in util.

[./util/shuffle.js](https://github.com/JeffGuKang/react-native-tutorial/blob/master/Examples/BasicTutorial/AdvancedFeatures/05-shuffle/util/shuffle.js)

We will use Fisher and Yates' shuffle algorithm.
If you wonder what it is see [here](https://www.youtube.com/watch?v=tLxBwSL3lPQ)
```javascript
export default fisherYates = originalArray => {
    const array = [...originalArray];

    for (let i = (array.length - 1); i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
} 
```

[./pages/todoListPage/todoList/TodoList.js](https://github.com/JeffGuKang/react-native-tutorial/blob/master/Examples/BasicTutorial/AdvancedFeatures/05-shuffle/pages/todoListPage/todoList/TodoList.js)
* Let's make shuffle icon button.

```diff
  import React, { useState } from 'react';
  import { StyleSheet, ScrollView, View } from 'react-native';
  import Item from './Item';
  import TextField from "./TextField";
  import runToast from "../../../components/toast"
+ import shuffle from "../../../util/shuffle";

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
      runToast(`${id}: is deleted!`, "LONG", "CENTER");
    }

    const onCheckButtonClickHandler = id => e => {
      toggleCheckedTodo(id);
    }

+   const onShuffleClickHandler = e => {
+     setTodos(shuffle(todos));
+   }

  return (
    <View>
-     <TextField onSubmitEnd={addTodoHandler} value={text} onTextChange={onInputChangeHandler} />
+     <TextField onSubmitEnd={addTodoHandler} value={text} onTextChange={onInputChangeHandler} onShuffleClick={onShuffleClickHandler} />
      <ScrollView contentContainerStyle={styles.todoListContainer}>
-       {todos.map((todo, index) => (
+       {todos.map(todo => (
          <Item
-           key={index}
+           key={todos.id}
            todo={todo}
            onRemove={onRemoveButtonClickHandler}
            onCheck={onCheckButtonClickHandler}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    backgroundColor: 'white'
  }
});

export default TodoList;
```

[./pages/todoListPage/todoList/TextField.js](https://github.com/JeffGuKang/react-native-tutorial/blob/master/Examples/BasicTutorial/AdvancedFeatures/05-shuffle/pages/todoListPage/todoList/TextField.js)
```diff
 import React from 'react';
- import { Button, StyleSheet, TextInput, View } from 'react-native';
+ import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
+ import Icon from 'react-native-vector-icons/FontAwesome';

- const TextField = ({ onTextChange, value, onSubmitEnd }) => {
+ const TextField = ({ onTextChange, value, onSubmitEnd, onShuffleClick }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add an item!"
        style={styles.input}
        value={value}
        onChangeText={onTextChange}
        onSubmitEditing={onSubmitEnd}
        placeholderTextColor={'#999'}
      />

+     <TouchableOpacity style={styles.shuffle} onPress={onShuffleClick}>
+       <Icon name="random" size={30} color="#3143e8" />
+     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white'
  },
  input: {
    flexGrow: 1,
    fontSize: 24,
- }
+  },
+  shuffle: {
+    marginVertical: 10,
+    marginHorizontal: 10,
+  }
});

export default TextField;
```

* Now try: 
```
npm start
```

![](../images/shuffle.gif "shuffle")
