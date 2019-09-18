---
layout: default
title: 2. Flexbox로 몸풀기
parent: 실시간 코인 정보 앱
grand_parent: Make Sample Apps(한글)
nav_order: 2
---

## 2. Flexbox로 몸풀기

### Flexbox로 레이아웃 잡기

Change your applicaiton's layouts using Flexbox with `StyleSheet`

App.js

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {backgroundColor: 'red', flex:1}]}></View>{ /* Delete flex */ }
        <View style={[styles.box, {backgroundColor: 'violet', flex:2}]}></View>{ /* Delete flex */ }
        <View style={[styles.box, {backgroundColor: 'pink', flex:3}]}></View>{ /* Delete flex */ }
        <Text>Open up App.js to start working on your app!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center', // edit here
    justifyContent: 'space-around', // edit here using `center, space-around`
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  }
});
```

### Run and Test!

- Change each color of `View` components
- Change styles as `backgroundColor`, `flex`, `alignItems` and `justifyContent`

![flexbox](../images/flexbox.png "flexbox")


<!-- [Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/02504e27ab657ef24e0d901b4ee53813a452e63f) -->