---
layout: default
title: 3. Adding a Card View
parent: Make TodoList Apps
grand_parent: React Native Basic Features
nav_order: 3
---

## Adding a Card View

After adding title and changing background of our application, we are going to work on display a card view which look similar to a paper with rounded corners. All of this code will come below our app title.

```js
<View style={styles.card}>
  <TextInput style={styles.input} placeholder="Add an item!" />
</View>
```

```js
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="Add an item!" />
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

![](../images/cardView.png "cardView.png")
