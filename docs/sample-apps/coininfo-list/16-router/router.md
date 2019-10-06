---
layout: default
title: 16. Router(react-navigation)
parent: Show Me The Coin
grand_parent: Make Sample Apps
nav_order: 16
---

## 16. Router(react-navigation)

We will use one of the most popular router libraries. [react-navigation](https://github.com/react-navigation/react-navigation)

```js
yarn add react-navigation@4.0.5
expo install react-native-gesture-handler
expo install react-native-reanimated
```

Copy source code from App.js to screens/Home.js. And arrange `import` as below 

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CoinView from './CoinView';
import TopBar from '../components/TopBar';

export default class Home extends React.Component {
…
}
```

### StackNavigator

App.js

```js
import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home'

const MainStack = createStackNavigator({
  Home: {
    screen: Home,    
  }
})

const AppContainer = createAppContainer(MainStack)

const App = () => {
  return (
    <AppContainer />
  )
}

export default App
```

### Makeup Header

App.js

```js
import Home from './screens/Home'

const Header = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>{props.title}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>{props.subtitle}</Text>
    </View>
  )
}

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: (
          <Header 
            title={'Show Me The Coin'} 
            subtitle={navigation.getParam('refreshDate', '-')} 
          />
        ),
        headerStyle: {
          backgroundColor: 'pink',
        },
      }
    },
  }
})

```

Home.js

```js
export default class Home extends React.Component {
  constructor(props) {
    super(props);    
  }

  _setRefreshDate = (date) => { // Called from CoinView's prop
    console.log('Updated: '+ date);
    if (this.props.navigation) {
      this.props.navigation.setParams({refreshDate: date});
    }
  }

  render() {
    return (
      <View style={styles.container}>       
        <CoinView
          refreshDate={this._setRefreshDate}
          style={styles.coinView}
        />
      </View>
    );
  }
}
```

### Detail Screen

Install `react-native-webview`

```
expo install react-native-webview
```

screens/Youtube.js

```
import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class Youtube extends React.Component {
  render() {
    return (
        <WebView 
            source={{ uri:'https://youtu.be/ar9PuUCvvCw' }} 
            style={{ marginTop: 20 }} 
        />
    )
  }
}
```

App.js

```js
const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      ...
    }
  },
  Youtube: {
    screen: Youtube,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('title', 'YOUTUBE'),
      }
    }
  }
}, {
  initialRouteName: 'Youtube',
})
```

### Clickable List

screens/CoinView.js

Replace existing `renderItem` to touchable component.

```
import { TouchableOpacity } from ‘react-native';

. . . 

  _renderItem = ({item}) => {
    const {rank, name, price_usd, market_cap_usd, last_updated} = item;
    return (
      <TouchableOpacity 
       onPress={() => this.props.navigation && 
        this.props.navigation.push('Youtube', {title: name})}
      >
        <CoinItem
          rank={rank}
          name={name}
          price={price_usd}
          volume={market_cap_usd}
          iconUri={getCoinIconUri(name)}
        />
      </TouchableOpacity>      
    );
  }
```

### Pass Navigation props

screens/Home.js

```js
  render() {
    return (
      <View style={styles.container}>       
        <CoinView
          navigation={this.props.navigation}
          refreshDate={this._setRefreshDate}
          style={styles.coinView}
        />
      </View>
    );
  }
```

### Convert to Youtube address from coin name

You can use any web address you want. We just use the some youtube link not related to the coin.

libs/Constants.js

```
export function getCoinYoutubeUrl(coinName) {
  switch (coinName) {
    case 'Bitcoin':
      return 'https://youtu.be/ar9PuUCvvCw';

    case 'Ethereum':
      return 'https://youtu.be/ar9PuUCvvCw';

    case 'XRP':
      return 'https://youtu.be/ar9PuUCvvCw';

    case 'EOS':
        return 'https://youtu.be/ar9PuUCvvCw';

    default:
      return 'https://youtu.be/ar9PuUCvvCw';
  }
}
```

screens/Youtube.js

```js
import * as React from 'react';
import { WebView } from 'react-native-webview';
import { getCoinYoutubeUrl } from '../libs/Constants';

export default class Youtube extends React.Component {
  render() {
    const title = this.props.navigation.getParam('title', '');
    const uri = getCoinYoutubeUrl(title);
    return (
        <WebView 
            source={{ uri: uri }} 
            style={{ marginTop: 20 }} 
        />
    )
  }
}
```

### Change header style

screens/App.js

```js
...

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: (
          <Header 
            title={'Show Me The Coin'} 
            subtitle={navigation.getParam('refreshDate', '-')} 
          />
        ),
        headerStyle: {
          backgroundColor: 'pink',
        },
      }
    },
  },
  Youtube: {
    screen: Youtube,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('title', 'YOUTUBE'),
      }
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'pink',
    }
  }
  // initialRouteName: 'Youtube',
})

...
```

You can see the detail screen by `react-navigation` when you touch some coin item.