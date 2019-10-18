import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import CounterStore from '../store/counterStore';

const Counter = observer(
  class Counter extends React.Component {
    render() {
      const {index, value} = this.props;
      return (
        <View index={value.toString()} style={styles.counterContainer}>
          <Text style={styles.counterInfo}>
            Count: {CounterStore.counter[index].counterNum}
          </Text>
          <View style={styles.counterBtnContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => CounterStore.handleIncrement({index})}>
              <Text style={{color: '#4C4C4C'}}>INCREMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => CounterStore.handleDecrement({index})}>
              <Text style={{color: '#4C4C4C'}}>DECREMENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  },
);

const styles = StyleSheet.create({
  counterContainer: {
    width: '100%',
    height: 100,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginBottom: 10,
  },
  counterInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  counterBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  counterButton: {
    backgroundColor: '#D1B2FF',
    marginLeft: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;
