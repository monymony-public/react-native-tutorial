import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class App extends React.Component {
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
    return (
      <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: 'beige',
    color: 'white',
  },
});
