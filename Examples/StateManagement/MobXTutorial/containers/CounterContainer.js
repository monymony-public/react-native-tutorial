import React from 'react';
import Counter from '../components/Counter';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class CounterContainer extends React.Component {
  counterNum = 0;

  decorate(CounterContainer, {
    counterNum: observable,
    increase: action,
    decrease: action
  })

  // Add counter
  handleAddCounter = () => {
    const {counter} = this.state;
    this.increase
  };

  // Remove counter
  handleRemoveCounter = () => {
    const {counter} = this.state;
    this.decrease
  };

  // Increment counterNum
  handleIncrement = ({index}) => {
    const {counter} = this.state;
    this.setState({
      counter: [
        ...counter.slice(0, index),
        {
          counterNum: counter[index].counterNum + 1,
        },
        ...counter.slice(index + 1, counter.length),
      ],
    });
  };

  // Decrement counterNum
  handleDecrement = ({index}) => {
    const {counter} = this.state;
    this.setState({
      counter: [
        ...counter.slice(0, index),
        {
          counterNum: counter[index].counterNum - 1,
        },
        ...counter.slice(index + 1, counter.length),
      ],
    });
  };

  render() {
    const {counter} = this.state;
    return (
      <View>
        <View style={styles.counterAddRemoveContainer}>
          <TouchableOpacity
            style={styles.counterAddRemoveButton}
            onPress={this.handleAddCounter}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
              Add Counter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterAddRemoveButton}
            onPress={this.handleRemoveCounter}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: '700'}}>
              Remove Counter
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.counterFrame}>
          {counter.map((item, index) => (
            <Counter
              key={index}
              index={index}
              value={item}
              handleIncrement={this.handleIncrement}
              handleDecrement={this.handleDecrement}
            />
          ))}
        </View>
      </View>
    );
  }
}

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
