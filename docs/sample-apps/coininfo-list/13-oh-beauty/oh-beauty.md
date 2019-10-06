---
layout: default
title: 13. Oh, Beauty
parent: Show Me The Coin
grand_parent: Make Sample Apps
nav_order: 13
---

## 13. Oh, Beauty

### Change the style better

It is your turn. 
Use the examples below to customize your design as you wish.
Change layout, colors and so on.

components/CoinItem.js

```js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinItem extends React.Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString();

    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, margin: 10 }}
          source={{ uri: this.props.iconUri }}
        />
        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={[styles.text, { flex: 1, fontSize: 20, marginTop: 5 }]}>{this.props.name || 'Name'}</Text>
            <Text style={[styles.text, { flex: 1, color: 'darkgrey' }]}>{'Volume: ' + (this.props.volume || 0)}</Text>
            <Text style={[styles.text, { flex: 1 }]}>{'$: ' + (this.props.price || 0)}</Text>
          </View>
          <Text style={[styles.text, { fontSize: 25, marginRight: 10 }]}>{'#' + (this.props.rank || 'Rank')}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'space-around', // center, space-around
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  text: {
    color: 'black',
  },
});

export default CoinItem;
```

It will be better to move each styles into the `StyleSheet`.

![prettier](../images/prettier.png)
