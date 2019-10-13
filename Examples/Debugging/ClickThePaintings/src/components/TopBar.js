import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TopBar = ({topStr = 'Click the paintings!'}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{topStr}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 100,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    paddingTop: 20,
    fontSize: 20,
  },
});

export default TopBar;
