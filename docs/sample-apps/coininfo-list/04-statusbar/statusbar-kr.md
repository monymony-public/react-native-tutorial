---
layout: default
title: 4. Status Bar
parent: 실시간 코인 정보 앱
grand_parent: Make Sample Apps(한글)
nav_order: 4
---

## 4. StatusBar

Sometimes your contents are placed under status bar or notch.
Solve this problem with `StatusBar` component.

- You can control status bar through `StatusBar` component from `react-native` module.
- I recommend use `Constants` from `expo-constants` module for status bar's height.

Install [expo-constants](https://docs.expo.io/versions/latest/sdk/constants/). To use it in a bare React Native app, refer the link.

```
expo install expo-constants
```

App.js

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CoinView from './screens/CoinView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <CoinView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#C2185B',
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1
  }
});
```

![Status Bar](screenshots/statusbar.png "StatusBar")

Use expo's constants to set statusbar's height matched devices. (https://docs.expo.io/versions/latest/guides/configuring-statusbar/#place-an-empty-view-on-top-of)

or

`StatusBar` is the component to control the app status bar. [link](https://facebook.github.io/react-native/docs/statusbar.html)

Most components can be customized with various parameters called `props`(properties).
And `hidden`, `backgroundColor` and `barStyle` are `StatusBar` component's props.