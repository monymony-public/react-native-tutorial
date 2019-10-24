import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {withRouter} from 'react-router-native';

const TopBar = ({location}) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {location.pathname === '/' ? 'Click the Paintings!' : 'Painting Detail'}
    </Text>
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

export default withRouter(TopBar);
