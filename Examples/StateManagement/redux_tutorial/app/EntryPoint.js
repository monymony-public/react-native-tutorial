import React from 'react';
import CounterContainer from './containers/CounterContainer';
import {StyleSheet, ScrollView} from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

function EntryPoint() {
  return (
      <Provider store={store}>
          <ScrollView style={styles.container}>
              <CounterContainer />
          </ScrollView>
      </Provider>
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
