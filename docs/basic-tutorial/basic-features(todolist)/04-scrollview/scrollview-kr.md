---
layout: default
title: 4. Adding a Scroll View
parent: 할 일 목록 앱 만들기
grand_parent: Basic(한글)
nav_order: 4
---

## Scroll View 추가하기

스크롤 뷰(ScrollView)는 여러개의 컴포넌트(components)와 뷰(views)를 담을 수 있는 스크롤 컨테이너 입니다. 스크롤 방향은 가로 세로 모두 가능하며 `horizontal` 속성으로 변경할 수 있습니다. 스크롤 뷰(ScrollView) 컴포넌트를 사용하여 할 일 목록 아이템을 보여주도록 하겠습니다.


스크롤 뷰(ScrollView)를 사용하기 위해서는 `react-native` 모듈로부터 import 해와야 합니다.

```js
import {  ... ScrollView,} from 'react-native';
```

ScrollView를 받아왔으면 아래 코드를 `TextInput` 바로 다음에 추가합니다.

```js
<ScrollView>
    <Text>TodoList</Text>
</ScrollView>
```

전체 코드는 아래를 참고하시면 됩니다.

```js
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Add an item!" />
        <ScrollView>
            <Text>TodoList</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;
```
