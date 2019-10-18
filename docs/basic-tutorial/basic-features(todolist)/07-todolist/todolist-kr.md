---
layout: default
title: 7. TodoList 컴포넌트
parent: 할 일 목록 앱 만들기
grand_parent: Basic(한글)
nav_order: 7
---

## TodoList

TodoList 컴포넌트에 아래 코드를 추가합니다.

```js
// components/TodoList.js
import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text>TodoList</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
```

app.js 파일에서 TodoList 컴포넌트를 임포트 합니다.

```js
// App.js
...
import TodoList from './components/TodoList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert />
        <TodoList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
...
}
```

![](../images/TodoList.png "TodoList.png")