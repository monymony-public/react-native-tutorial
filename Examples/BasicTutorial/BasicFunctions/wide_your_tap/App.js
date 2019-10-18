import React, { Component } from 'react';
import { Text, StatusBar, TouchableOpacity, View, StyleSheet } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
            This demo shows how using hitSlop can make interactive elements
            much easier to tap without changing their layout and size. Try
            pressing each button quickly multiple times and notice which one 
            is easier to hit.
          </Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity>
            <Text style={styles.label}>Without hitSlop</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}>
            <Text style={styles.label}>With hitSlop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingTop: 20,
    padding: 20,
    backgroundColor: '#336699',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    color: '#336699',
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  separator: {
    height: 30,
  },
});
