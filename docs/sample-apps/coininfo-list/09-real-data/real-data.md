---
layout: default
title: 9. Real Data.
parent: Show Me The Coin
grand_parent: Make Sample Apps
nav_order: 9
---

## 9. It's Real Data.

### Use read data instead of dummies

- [Coinmarketcap Api](https://coinmarketcap.com/api/)

screens/CoinView.js

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinItem from '../components/CoinItem';

class CoinView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [],
      isLoading: false,
    };

    // TODO: Toggle the state every second

  }

  componentDidMount() { // After component mounted
    this._getCoinData(10);

    setInterval(() => {
      this._getCoinData(10);
      console.log('toggled!');
    }, 10000);
  }

  _getCoinData = async (limit) => {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`);
      const responseJson = await response.json();
      await this.setState({
        coinData: responseJson,
        isLoading: false,
      });
    } catch(error) {
      console.error('_getCoinData', error);
    }
  }

  render () {
    let coinItems = this.state.coinData.map( (data, index) => {
      const {rank, name, price_usd, market_cap_usd, last_updated} = data; // Destructuring
      return (
        <CoinItem
          key={index}
          rank={rank}
          name={name}
          price={price_usd}
          volume={market_cap_usd}
        />
      );
    });

    return (
      <View style={this.props.style}>
        {coinItems}
      </View>
    )
  }
}

export default CoinView;
```

### Run

![RealData](/screenshots/realData.png)
