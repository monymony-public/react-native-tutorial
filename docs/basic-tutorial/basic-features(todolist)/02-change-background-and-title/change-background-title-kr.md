---
layout: default
title: 2. 배경색 및 타이틀 변경 
parent: 할 일 목록 앱 만들기
grand_parent: Basic(한글)
nav_order: 2
---

## 배경색 및 타이들 변경

**app.js** 파일에서 다음과 같이 새로운 타이틀과 스타일을 추가합니다.

```js
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
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
});

export default App;
```

변경한 타이틀과 배경색이 적용된 것을 확인할 수 있습니다.

![](../images/background_title.png "background_title.png")