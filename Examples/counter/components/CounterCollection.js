import React from 'react';
import Counter from './Counter';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class CounterCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {counterNum: [0]};
  }

  addCounter() {
    var joined = this.state.counterNum.concat(0);
    this.setState({counterNum: joined});
  }

  render() {
    const counterByNum = this.state.counterNum;
    return (
      <View>
        {counterByNum.map(item => (
          <Counter value={this.state.counterNum[item]}/>
        ))}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.addCounter.bind(this)}>
            <Text>Add Counter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    color: 'white',
  },
});

export default CounterCollection;
