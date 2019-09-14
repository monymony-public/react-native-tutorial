import React from 'react';
import Counter from './Counter';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class CounterCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {counterNum: [0]};
  }

  addCounter() {
    const joined = this.state.counterNum.concat(0);
    this.setState({counterNum: joined});
  }

  removeCounter() {
    const joined = this.state.counterNum.slice(0, this.state.counterNum.length-1);
    this.setState({counterNum: joined});
  }

  render() {
    const counterByNum = this.state.counterNum;
    return (
        <View>
          <View style={styles.counterAddRemoveContainer}>
            <TouchableOpacity
                style={styles.counterAddRemoveButton}
                onPress={this.addCounter.bind(this)}>
              <Text style={{textAlign: 'center', color : 'white', fontWeight: '700'}}>Add Counter</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.counterAddRemoveButton}
                onPress={this.removeCounter.bind(this)}>
              <Text style={{textAlign: 'center', color : 'white', fontWeight: '700'}}>Remove Counter</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.counterFlame}>
            {counterByNum.map((item) => (
                <Counter value={this.state.counterNum[item]}/>
            ))}
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  counterFlame : {
    padding : 10,
  },
  counterAddRemoveContainer : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
  },
  counterAddRemoveButton: {
    margin : 10,
    padding : 10,
    flex : 1,
    backgroundColor: '#8041D9',
  },
});

export default CounterCollection;
