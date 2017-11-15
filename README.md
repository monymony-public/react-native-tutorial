# React Native Tutorial: Show Me The Coin (Build real native application with javascript. )

## Getting Started

- [Node.js](https://nodejs.org/en/): React Native uses `Node.js` to build code
- [Expo](https://expo.io):
> Our tools enable developers to build and share truly native apps that work across both iOS and Android. Everything is open source, free and uses React Native.
Download our tools

# 1. Create Project using Expo

![expo][expo0]
Create your project and run 

commits: 68e9991f3c461359041ea71badc182a4129a566c

[expo0]: ./screenshots/expo0.png "Expo Launch"

# FlexBox

App.js

```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {backgroundColor: 'red'}]}></View>
        <View style={[styles.box, {backgroundColor: 'green'}]}></View>
        <View style={[styles.box, {backgroundColor: 'blue'}]}></View>
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
    alignItems: 'center',
    justifyContent: 'space-around', // center, space-around
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  }
});
```
