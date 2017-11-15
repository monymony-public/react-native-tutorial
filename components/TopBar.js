import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class TopBar extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Button title='Left' color='white' style={{color: 'white', marginLeft: 10}}></Button>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>{this.props.title}</Text>
          <Text style={{color: 'white', fontSize: 10}}>{this.props.refreshDate || ','}</Text>
        </View>
        <Button title='Right' color='white' style={{color: 'white', marginRight: 10}}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#ff9192',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
  },
});

export default TopBar;
