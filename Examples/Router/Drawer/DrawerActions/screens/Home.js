import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }>
          <Text style={styles.textStyle}>open-drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.closeDrawer())
          }>
          <Text style={styles.textStyle}>close-drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
