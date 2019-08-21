import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CoinView from './CoinView';
import TopBar from '../components/TopBar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);    
  }

  _setRefreshDate = (date) => { // Called from CoinView's prop
    console.log('Updated: '+ date);
    if (this.props.navigation) {
      this.props.navigation.setParams({refreshDate: date});
    }
  }

  render() {
    return (
      <View style={styles.container}>       
        <CoinView
          navigation={this.props.navigation}
          refreshDate={this._setRefreshDate}
          style={styles.coinView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'pink',
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-start' // center, space-around
  }
});
