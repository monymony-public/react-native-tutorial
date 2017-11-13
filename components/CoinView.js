import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CoinDetail from './CoinDetail';

/**
Coin Data: https://api.coinmarketcap.com/v1/ticker/
*/

const sampleData = [
  {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "6195.6",
        "price_btc": "1.0",
        "24h_volume_usd": "8119580000.0",
        "market_cap_usd": "103323711420",
        "available_supply": "16676950.0",
        "total_supply": "16676950.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "-1.8",
        "percent_change_24h": "4.19",
        "percent_change_7d": "-15.65",
        "last_updated": "1510556652"
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": "2",
        "price_usd": "310.13",
        "price_btc": "0.0493027",
        "24h_volume_usd": "1636680000.0",
        "market_cap_usd": "29678006174.0",
        "available_supply": "95695373.0",
        "total_supply": "95695373.0",
        "max_supply": null,
        "percent_change_1h": "-0.89",
        "percent_change_24h": "1.81",
        "percent_change_7d": "4.39",
        "last_updated": "1510556649"
    },
];

class CoinView extends React.Component {
  state = {
    coinDatas: null,
    isLoaded: false,
  }


  render () {
    let detailCells = sampleData.map( (data, index) => {
      const {rank, name, price_usd, market_cap_usd, time} = data; // Destructuring
      return (
        <CoinDetail
          key={index}
          rank={rank}
          name={name}
          price={price_usd}
          volumn={market_cap_usd}
        />
      );
    });

    return (
      <View style={this.props.style}>
        {detailCells}
      </View>
    )
  }
}
export default CoinView;
