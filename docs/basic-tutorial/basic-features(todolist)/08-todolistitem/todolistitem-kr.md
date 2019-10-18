---
layout: default
title: 8. TodoListItem 컴포넌트
parent: 할 일 목록 앱 만들기
grand_parent: Basic(한글)
nav_order: 8
---

## TodoListItem

TodoListItem 컴포넌트에 아래 코드를 추가합니다.

```js
// components/TodoListItem.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.circle} />
      </TouchableOpacity>
      <Text style={styles.text}>TodoList items will be shown here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
});

export default TodoListItem;
```

TodoList 컴포넌트에서 TodoListItem를 임포트 합니다.

ScrollView 안에 TodoListItem 컴포넌트를 추가합니다.

```js
// components/TodoList.js
...
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <TodoListItem />
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

앱을 실행해서 추가한 아이템이 리스트에 나타나는지 확인합니다.

![](../images/TodoListItem.png "TodoListItem.png")