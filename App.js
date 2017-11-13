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
