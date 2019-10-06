---
layout: default
title: 11. ScrollView. Another Component
parent: Show Me The Coin
grand_parent: Make Sample Apps
nav_order: 11
---

## 11. ScrollView. Another Component

### Make a scroll for items off screen

This is a super easy chapter.

- Replace `View` with `ScrollView`
- Remove `justifyContent` and `alignItems` from CoinView.js's style. (ScrollView dose not have fixed size).

screens/CoinView.js

```js
...
import { StyleSheet, Text, View, ScrollView } from 'react-native';

...

return (
  <ScrollView style={this.props.style}>
    {coinItems}
  </ScrollView>
)

...
```

App.js

in Style

```js
coinView: {
  width: '100%',
  flex: 1,
  flexDirection: 'column', // row
  backgroundColor: 'white',
  // alignItems: 'center',
  // justifyContent: 'flex-start' // center, space-around
}
```

We just changed `View` to `ScrollView`, but we can scroll the screen.


