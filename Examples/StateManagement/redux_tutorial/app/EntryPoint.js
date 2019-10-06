import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import CounterContainer from './containers/CounterContainer';


const EntryPoint = () => {
  return (
      <ScrollView style={styles.container}>
          <CounterContainer />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F6F6F6',
    paddingTop: '15%',
    paddingBottom : '15%',
  },
});

export default EntryPoint;
