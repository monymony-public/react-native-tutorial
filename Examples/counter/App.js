import React from 'react';
import CounterCollection from './components/CounterCollection';
import {StyleSheet, ScrollView} from 'react-native';

function App() {
  return (
      <ScrollView style={styles.container}>
        <CounterCollection />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    width : "100%",
    backgroundColor: '#F6F6F6',
    paddingTop : '15%',
  },
});

export default App