---
layout: default
title: 4. Adding a Scroll View
parent: Make TodoList Apps
grand_parent: React Native Basic Features
nav_order: 4
---

## Adding a Scroll View

The ScrollView is a generic scrolling container that can host multiple components and views. You can scroll both vertically and horizontally by setting the `horizontal` property. We will use the ScrollView component to display the list of todo items.

You need to import ScrollView from `react-native`

```js
import {  ... ScrollView,} from 'react-native';
```
Add the code below right after `TextInput`.

```js
<ScrollView>
    <Text>TodoList</Text>
</ScrollView>
```

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
