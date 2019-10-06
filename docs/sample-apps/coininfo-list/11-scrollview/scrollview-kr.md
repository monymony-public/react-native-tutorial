---
layout: default
title: 11. 스크롤뷰로 스크롤되도록 만들기
parent: 실시간 코인 정보 앱
grand_parent: Make Sample Apps(한글)
nav_order: 11
---


## 11. 스크롤뷰로 스크롤되도록 만들기

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


