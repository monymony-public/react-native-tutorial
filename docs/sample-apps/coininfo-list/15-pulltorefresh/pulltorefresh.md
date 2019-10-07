---
layout: default
title: 15. Pull To Refresh
parent: Show Me The Coin
grand_parent: Make Sample Apps
nav_order: 15
---

## 15. Pull To Refresh

FlatList have a props called `onRefresh` and `refreshing`. It uses the default refresh control triggered by a pull gesture.

screens/CoinView.js

```js
  componentDidMount() { // After component mounted
    this._getCoinData(10);

    // setInterval(() => {
    //   this._getCoinData(10);
    //   console.log('toggled!');
    // }, 10000);
  }
```

```
  render () {    
    return (      
      <FlatList 
        data={this.state.coinData}
        keyExtractor={(item) => item.name}
        renderItem={this._renderItem}
        refreshing={this.state.isLoading}
        onRefresh={this._getCoinData}      
      />
    )
  }
```
