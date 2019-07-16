import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import CoinView from './screens/CoinView';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshDate: '-',
    }
  }

  _setRefreshDate = (date) => { // Called from CoinView's prop
    console.log('Updated: '+ date);
    this.setState({
      refreshDate: date,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar title="Show Me The Coin" refreshDate={this.state.refreshDate} />
        <CoinView
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
