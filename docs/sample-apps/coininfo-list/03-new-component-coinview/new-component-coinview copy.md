---
layout: default
title: 3. New Component - CoinView
parent: Show Me The Coin
grand_parent: Make Sample Apps
nav_order: 3
---

## 3. Say Hello to a New Component: `CoinView`

- Make a new file: 'screens/CoinView.js'
- Make a new component as below

CoinView.js

```js
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class CoinView extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>New View </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CoinView;
```


App.js

```js
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CoinView from './screens/CoinView'

export default class App extends React.Component {
  render() {
    return (
      <CoinView></CoinView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

### Run and Test!

![sayHello](./screenshots/sayHello.png "sayHello")
