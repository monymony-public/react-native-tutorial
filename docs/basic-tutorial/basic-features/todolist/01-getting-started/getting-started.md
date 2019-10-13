---
layout: default
title: 1. Getting Started
parent: Make TodoList Apps
grand_parent: React Native Basic Features
nav_order: 1
---

## Getting Started

In this tutorial, we are going to build a Todo Application as our example using React Native. This mobile application will be cross-platform meaning it will run both on Android and iOS device. We will use React Native CLI to generate the project and MacOS as a development operating system and iOS as a target operating system.

### Requirements

Before we get started, make sure you have environment set up.

Please refer to the following link for environment settings:

- [https://facebook.github.io/react-native/docs/0.60/getting-started](https://facebook.github.io/react-native/docs/0.60/getting-started)

### Create New Project

Use the React Native command line interface to generate a new React Native project called "**ReactNativeTodos**"

```
react-native init ReactNativeTodos
```

Run `react-native run-ios` inside your project folder:

```
cd AwesomeProject
react-native run-ios
```

### Creating a Todo Application

Let's make the code in **app.js** looks like this:

```javascript
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
```

Run the following in terminal

```
react-native run-ios
```

You should see the app running as below

![](../images/hello.png "Hello.png")
