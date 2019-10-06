---
layout: default
title: 14. Use `FlatList` instead of 'ScrollView'
parent: Show Me The Coin
grand_parent: Make Sample Apps
nav_order: 14
---

## 14. Use `FlatList` instead of 'ScrollView'

[FlatList](https://facebook.github.io/react-native/docs/flatlist) can be used to display repetitive elements.
It manage resources more efficiently than `ScrollView`. Therefore this is more suitable for large data.

screens/CoinView.js

```js

...
import { StyleSheet, Text, View, FlatList } from 'react-native';
...
_renderItem = ({item}) => {
    const {rank, name, price_usd, market_cap_usd, last_updated} = item; // Destructuring
    return (
      <CoinItem
        rank={rank}
        name={name}
        price={price_usd}
        volume={market_cap_usd}
        iconUri={getCoinIconUri(name)}
      />
    );
  }

  render () { // Do not forget import FlatList   
    return (
      <FlatList 
        data={this.state.coinData}
        keyExtractor={(item) => item.name}
        renderItem={this._renderItem}
      />
    )
  }
...
```