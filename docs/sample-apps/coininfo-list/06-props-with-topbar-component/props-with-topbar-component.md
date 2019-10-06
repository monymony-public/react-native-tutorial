---
layout: default
title: 6. Props with TopBar Component
parent: Show Me The Coin
grand_parent: Make Sample Apps
nav_order: 6
---

## 6. Props with TopBar Component

- `-` is deleted line
- `+` is added line

screens/CoinView.js

```js
class CoinView extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text>New Coin View </Text>
      </View>
    );
  }
}
```

You can apply styles from other parent components.

components/TopBar.js

Ready to apply title from a parent component

```js
return (
        <View style={styles.container}>
          <Text>Left</Text>
 -        <Text>TopBar</Text>
 +        <Text style={{fontSize: 20}}>{this.props.title || 'TITLE'}</Text>
          <Text>Right</Text>
        </View>
      )
```

App.js

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CoinView from './screens/CoinView';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar title="Show Me The Coin" />
        <CoinView style={styles.coinView} />
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
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start' // center, space-around
  }
});
```

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/2ae181865e6a2a1445a723944317394730517d9b)
