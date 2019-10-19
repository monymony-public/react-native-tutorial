import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import Counter from '../components/Counter';
import CounterStore from '../store/counterStore';

const CounterContainer = observer(
  class CounterContainer extends React.Component {
    render() {
      return (
        <View>
          <View style={styles.counterAddRemoveContainer}>
            <TouchableOpacity
              style={styles.counterAddRemoveButton}
              onPress={CounterStore.handleAddCounter}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '700',
                }}>
                Add Counter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.counterAddRemoveButton}
              onPress={CounterStore.handleRemoveCounter}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '700',
                }}>
                Remove Counter
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.counterFrame}>
            {CounterStore.counter.map((item, index) => (
              <Counter key={index} index={index} value={item} />
            ))}
          </View>
        </View>
      );
    }
  },
);

const styles = StyleSheet.create({
  counterFrame: {
    padding: 10,
  },
  counterAddRemoveContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  counterAddRemoveButton: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: '#8041D9',
  },
});

export default CounterContainer;
