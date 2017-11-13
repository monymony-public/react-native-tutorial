import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CoinDetail from './CoinDetail';

class CoinView extends React.Component {
  render () {
    return (
      <View style={this.props.style}>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
        <CoinDetail></CoinDetail>
      </View>
    )
  }
}
export default CoinView;
