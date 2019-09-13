import React from 'react';
import CounterCollection from './components/CounterCollection';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function App() {


  return (
    <View style={styles.container}>
      <CounterCollection />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App