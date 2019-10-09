---
layout: default
title: 15. 당겨서 새로고침
parent: 실시간 코인 정보 앱
grand_parent: Make Sample Apps(한글)
nav_order: 15
---

## 15. 당겨서 새로고침

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
