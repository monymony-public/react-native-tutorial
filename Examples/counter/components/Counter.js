import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {count: 0};
  }

  onclick(type) {
    this.setState(prevState => {
      return {count: type == 'add' ? prevState.count + 1 : prevState.count - 1};
    });
  }

  render() {
    const value = this.props.value;
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onclick.bind(this, 'add')}>
          <Text>inc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onclick.bind(this, 'sub')}>
          <Text>dec</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'beige',
    color: 'white',
  },
});

export default Counter;