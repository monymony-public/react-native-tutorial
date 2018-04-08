# React Native Tutorial: Show Me The Coin
(Build real native application with javascript, and Run on Expo)

![ShowMeTheCoin](/screenshots/prettier.png)

## Contents
1. [Create a New Project in Expo XDE](https://github.com/JeffGuKang/ReactNative-Tutorial#1-create-a-new-project-in-expo-xde)
2. [FlexBox Practice](https://github.com/JeffGuKang/ReactNative-Tutorial#2-flexbox-practice)
3. [Say Hello to a New Component: `CoinView`](https://github.com/JeffGuKang/ReactNative-Tutorial#3-say-hello-to-a-new-component-coinview)
4. [Good Bye StatusBar (Props)](https://github.com/JeffGuKang/ReactNative-Tutorial#4-good-bye-statusbar-props)
5. [Top Bar](https://github.com/JeffGuKang/ReactNative-Tutorial#5-top-bar)
6. [Props with TopBar Components](https://github.com/JeffGuKang/ReactNative-Tutorial#6-props-with-topbar-components)
7. [Brand New CoinDetail Component](https://github.com/JeffGuKang/ReactNative-Tutorial#7-brand-new-coindetail-component)
8. [Push Dummies Into The CoinDetail Component](https://github.com/JeffGuKang/ReactNative-Tutorial#8-push-dummies-into-the-coindetail-component)
9. [It's Real Data](https://github.com/JeffGuKang/ReactNative-Tutorial#9-its-real-data)
10. [Upgrade TopBar](https://github.com/JeffGuKang/ReactNative-Tutorial#10-upgrade-topbar)
11. [ScrollView. Another Component](https://github.com/JeffGuKang/ReactNative-Tutorial#11-scrollview-another-component)
12. [Oh, Beauty](https://github.com/JeffGuKang/ReactNative-Tutorial#12-oh-beauty)

## Getting Started
- [React Native Basics](https://facebook.github.io/react-native/docs/tutorial.html): Component, Props, State, [JSX](https://reactjs.org/docs/jsx-in-depth.html)...
- ES2015(ES6): `import`, `from`, `extends`, `=>`
- [Node.js](https://nodejs.org/en/): React Native uses `Node.js` to build code
- [Expo](https://expo.io):
> Our tools enable developers to build and share truly native apps that work across both iOS and Android. Everything is open source, free and uses React Native.
Download our tools

- iOS Simulator: XCode(with Mac). Strongly recommend it for fast build. You can to skip it if you build your project on you device only.(not recommend for Kosscon 2017)

- Android Simulator: [Genymotion](https://docs.genymotion.com/Content/01_Get_Started/Installation.htm)
> On Android we recommend the Genymotion emulator over the standard emulator — we have found it to be more feature complete, faster and easier to use.
Download Genymotion (free version) and follow the Genymotion installation guide. Once you’ve installed Genymotion, create a virtual device - we recommend a Nexus 5, the Android version is up to you. Start up the virtual device when it’s ready. If you run into any issues follow our Genymotion guide.

## 1. Create a New Project in Expo XDE

![expo][expo0]

- Create your project and open on Expo.
- Run your project on the simulator(Device Button on top-right ) or `Expo App` on your device
- Open development menus(Android: `cmd+m`, iOS: `ctrl+cmd+z` or `cmd+d`) and toggle `Hot/Live reloading` on Expo App
- Edit your text and feel the magic

* commnets may do not work on JSX area.

#### App.js

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return ( // JSX Area
      <View style={styles.container}>
      <Text>Open up App.js to start working on your app</Text> // Edit here
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

### Run and Test!!
- Turn on Hot reloading and edit the `Text` component in App.js

![Hello](./screenshots/hello.png "Hello React Native")

- Change your host in XDE to `LAN` or `localhost` for faster
> If you are using LAN, make sure your device is on the same wifi network as your development machine. This may not work on some public networks. localhost will not work for iOS unless you are in the simulator, and it only work on Android if your device is connected to your machine via usb.

- Development menus
  - Android Simulator: `cmd+m`
  - iOS Simulator: `ctrl+cmd+z` or `cmd+d`
  - Genymotion(Android): `Menu` or `cmd+m`


[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/68e9991f3c461359041ea71badc182a4129a566c)

[expo0]: ./screenshots/expo0.png "Expo Launch"

## 2. FlexBox Practice

- Change your applicaiton's layouts using Flexbox with `StyleSheet`

#### App.js

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {backgroundColor: 'red', flex:1}]}></View> { /* Delete flex */ }
        <View style={[styles.box, {backgroundColor: 'violet', flex:2}]}></View> { /* Delete flex */ }
        <View style={[styles.box, {backgroundColor: 'pink', flex:3}]}></View> { /* Delete flex */ }
        <Text>Open up App.js to start working on your app!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center', // edit here
    justifyContent: 'space-around', // edit here using `center, space-around`
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  }
});
```

### Run and Test!

- Change each color of `View` components
- Change styles as `backgroundColor`, `flex`, `alignItems` and `justifyContent`

![flexbox](./screenshots/flexbox.png "flexbox")


[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/02504e27ab657ef24e0d901b4ee53813a452e63f)

## 3. Say Hello to a New Component: `CoinView`

- Make a new file: 'components/CoinView.js'
- Write a new component as below

#### CoinView.js

```js
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class CoinView extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>New View </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // width: '50%',
    // flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'skyblue',
    // alignItems: 'center',
    // justifyContent: 'space-around', // center, space-around
  },
});

export default CoinView;
```


#### App.js

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinView from './components/CoinView'; // Call your new friend

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {backgroundColor: 'red'}]}></View>
        <View style={[styles.box, {backgroundColor: 'green'}]}></View>
        <View style={[styles.box, {backgroundColor: 'blue'}]}></View>
        <CoinView></CoinView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row', // column
    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'space-between', // center, space-around
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  }
});
```

### Run and Test!
- Change positions with `CoinView` and other components
- Feel the flex
- You may understand about component and styles with flexbox

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/cacf5c4d9af9bf4d004f5476c4b70448072d9e58)

## 4. Good Bye StatusBar (Props)
- Hide status bar through `StatusBar` component

#### App.js

```js
...
import { StyleSheet, Text, View, StatusBar } from 'react-native'; // Use StatusBar component
...
render() {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={true}
        backgroundColor="blue"
        barStyle="light-content"
      />

      <CoinView></CoinView>
    </View>
  );
}
```

`StatusBar` is the component to control the app status bar. [link](https://facebook.github.io/react-native/docs/statusbar.html)

Most components can be customized with various parameters called `props`(properties).
And `hidden`, `backgroundColor` and `barStyle` are `StatusBar` component's props.

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/d53ea6be5c92efcadb38e9770e377056feeba678)

## 5. Top Bar

- Make another component called `TopBar`
- You will know how to make components and use

#### /components/TopBar.js

```js
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Left</Text>
        <Text>TopBar</Text>
        <Text>Right</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
  },
});

export default TopBar;
```

#### App.js

```js
...
import TopBar from './components/TopBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
          backgroundColor="blue"
          barStyle="light-content"
        />
        <TopBar></TopBar>
        <CoinView></CoinView>
      </View>
    );
  }
}
...
```

### Tada!

![TopBar](./screenshots/topbar.png "TopBar")

- Why did `TopBar` use only `height` and `CoinView` use `flexbox` in the style prop?

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/d53ea6be5c92efcadb38e9770e377056feeba678)

## 6. Props with TopBar Components

#### components/CoinView.js

```js
class CoinView extends React.Component {
    render () {
      return (
 -      <View style={styles.container}>
 -        <Text>New View </Text>
 +      <View style={this.props.style}> { /* Ready to get style from a parent component */ }
 +        <Text>코인뷰가 나올것입니다.</Text>
        </View>
      )
    }
```

#### components/TopBar.js

```js
return (
        <View style={styles.container}>
          <Text>Left</Text>
 -        <Text>TopBar</Text>
 +        <Text style={{fontSize: 20}}>{this.props.title}</Text> // Ready to apply title from a parent component
          <Text>Right</Text>
        </View>
      )
```

#### App.js

```js
backgroundColor="blue"
  barStyle="light-content"
/>
-        <TopBar></TopBar>
-        <CoinView></CoinView>
+        <TopBar title="코인 시세"/>
+        <CoinView style={styles.coinView} />
</View>
);
}

...

const styles = StyleSheet.create({
alignItems: 'center',
justifyContent: 'space-between', // center, space-around
},
-  box: {
-    backgroundColor: 'blue',
-    width: 50,
-    height: 50,
+  coinView: {
+    width: '100%',
+    flex: 1,
+    flexDirection: 'column', // row
+    backgroundColor: 'skyblue',
+    alignItems: 'center',
+    justifyContent: 'space-around', // center, space-around
}
});
```

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/2ae181865e6a2a1445a723944317394730517d9b)

## 7. Brand New CoinDetail Component

- Add compoenents/CoinDetail.js file

#### compoenents/CoinDetail.js

```js
import React from 'react'
 import { StyleSheet, Text, View, Image } from 'react-native';

 class CoinDetail extends React.Component {
   render () {
     let date = new Date();
     let now = date.toLocaleString()

     return (
       <View style={styles.container}>
         <Image
         style={{width: 50, height: 50}}
         source={{uri: 'https://bitcoin.org/img/icons/opengraph.png'}}
         />
         <Text style={[styles.text, {flex: 1}]}>{'#' + (this.props.rank || 'Rank')}</Text>
         <Text style={[styles.text, {flex: 1}]}>{this.props.name || 'Name'}</Text>
         <Text style={[styles.text, {flex: 1}]}>{'Price: ' + (this.props.price || 0)}</Text>
         <Text style={[styles.text, {flex: 1}]}>{'Volume: ' + (this.props.volumn || 0)}</Text>
         <Text style={[styles.text, {flex: 1}]}>{'Updated: ' + (this.props.time || now)}</Text>
       </View>
     )
   }
 }

 const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: 80,
     flexDirection: 'row', // row
     backgroundColor: 'blue',
     alignItems: 'center',
     justifyContent: 'space-around', // center, space-around
     marginTop: 5,
     marginBottom: 5,
   },
   text: {
     color: 'white',
   }
 });

 export default CoinDetail;
```

#### compoenents/CoinView.js

```js
import React from 'react'
  import { StyleSheet, Text, View } from 'react-native';
 +import CoinDetail from './CoinDetail';

  class CoinView extends React.Component {
    render () {
      return (
        <View style={this.props.style}>
 -        <Text>코인뷰가 나올것입니다.</Text>
 +        <CoinDetail></CoinDetail>
 +        <CoinDetail></CoinDetail>
 +        <CoinDetail></CoinDetail>
 +        <CoinDetail></CoinDetail>
        </View>
      )
    }
  }
 -
 -const styles = StyleSheet.create({
 -  container: {
 -    width: '100%',
 -    flex: 1,
 -    flexDirection: 'column', // row
 -    backgroundColor: 'skyblue',
 -    alignItems: 'center',
 -    justifyContent: 'space-around', // center, space-around
 -  },
 -});
 -
 ```

 ### Run

 ![CoinDetail](/screenshots/coinDetail.png)


[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/df24f2d9ef4db4569ffeb8e6f95a1139a58ad53f)

## 8. Push Dummies Into The CoinDetail Component

#### components/CoinView.js

Example Data
```js
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
```

Apply data

```js
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

    /** Same expression with above **/
    // let detailCells = [];
    //
    // for (var i = 0; i < sampleData.length; i++) {
    //   let data = sampleData[i];
    //   let coinDetail = (
    //     <CoinDetail
    //       key={data.index}
    //       rank={data.rank}
    //       name={data.name}
    //       price={data.price_usd}
    //       volumn={data.market_cap_usd}
    //     />
    //   )
    //   detailCells.push(coinDetail);
    // }

   return (
     <View style={this.props.style}>
+        {detailCells}
     </View>
   )
 }


```

#### Run

![DummyDatas](/screenshots/sampleData.png)

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/8aa6189d00222f5d7deca2e319b204bf720d075a)
[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/bad44c30d1352346cf42ddeeba5aeb97ea95528d)

## 9. It's Real Data.

- [Coinmarketcap Api](https://coinmarketcap.com/api/)

#### components/CoinView.js

```js
class CoinView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinDatas: [],
      isLoaded: false,
    };

    // Toggle the state every second

  }

  componentDidMount() { // After component loaded
    this._getCoinDatas(10);

    setInterval(() => {
      this._getCoinDatas(10);
      console.log('toggled!');
    }, 10000);
  }

  _getCoinDatas(limit) {
    this.setState({
      isLoaded: false,
    });

    fetch(
      `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`
    )
    .then(response => response.json())
    .then(data => {
      this.setState({
        coinDatas: data,
        isLoaded: true,
      });
    });
  }

  render () {
    let detailCells = this.state.coinDatas.map( (data, index) => {
      const {rank, name, price_usd, market_cap_usd, last_updated} = data; // Destructuring
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

    /** Same expression with above **/
    // let detailCells = [];
    //
    // for (var i = 0; i < this.state.coinDatas.length; i++) {
    //   let data = this.state.coinDatas[i];
    //   let coinDetail = (
    //     <CoinDetail
    //       key={data.index}
    //       rank={data.rank}
    //       name={data.name}
    //       price={data.price_usd}
    //       volumn={data.market_cap_usd}
    //     />
    //   )
    //   detailCells.push(coinDetail);
    // }

    return (
      <View style={this.props.style}>
        {detailCells}
      </View>
    )
  }
}
export default CoinView;
```


#### components/CoinDetail.js

Change raw time to date format

```js
<Text style={[styles.text, {flex: 1}]}>{this.props.name || 'Name'}</Text>
         <Text style={[styles.text, {flex: 1}]}>{'Price: ' + (this.props.price || 0)}</Text>
         <Text style={[styles.text, {flex: 1}]}>{'Volume: ' + (this.props.volumn || 0)}</Text>
-        <Text style={[styles.text, {flex: 1}]}>{'Updated: ' + (this.props.time || now)}</Text>
+        <Text style={[styles.text, {flex: 1}]}>{'Updated: ' + (Date(this.props.time) || now)}</Text> //Date
       </View>
     )
   }
```

#### Run

![RealData](/screenshots/realData.png)

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/4b77fc74772cb6d55c73c9555e4308dcb4c15f8b)


## 10. Upgrade TopBar

Communication between parent and child components

- Add refresh date information on `TopBar`
- Sequence of `refreshDate`'s data flow:
`CoinView.js` -> `App.js` -> `TopBar.js`

#### components/CoinView.js

```js
_getCoinDatas(limit) {
    this.setState({
      isLoaded: false,
    });

    fetch(
      `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`
    )
    .then(response => response.json())
    .then(data => {
      let date = new Date();
      let now = date.toLocaleString()

      if (this.props.refreshDate != null) {        
        this.props.refreshDate(now); // Run func type props
      }

      this.setState({
        coinDatas: data,
        isLoaded: true,
      });
    });
  }
```

#### App.js

```js
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshDate: '-',
    };
  }

  _setRefreshDate(date) { // Called from CoinView's prop
    console.log('Updated: '+ date);    
    this.setState({
      refreshDate: date,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
          backgroundColor="blue"
          barStyle="light-content"
        />
      <TopBar title="코인 시세" refreshDate={this.state.refreshDate} />
        <CoinView
          refreshDate={(date) => this._setRefreshDate(date)} {/* // function type prop */}
          style={styles.coinView} />
      </View>
    );
  }
}
```

#### components/TopBar.js

```js
return (
       <View style={styles.container}>
         <Text>Left</Text>
        <View>
          <Text style={{fontSize: 20}}>{this.props.title}</Text>
          <Text style={{fontSize: 10}}>{this.props.refreshDate || ','}</Text>
        </View>
         <Text>Right</Text>
       </View>
     )
```

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/cc74b2147b8dd70ea5e6b72e307c8208c6523146)

#### Result

![TopBar](/screenshots/statesToTopbar.png)

## 11. ScrollView. Another Component

Super easy!

- Replace `View` with `ScrollView`

#### components/CoinView.js

```js
...
import { StyleSheet, Text, View, ScrollView } from 'react-native';

...

return (
  <ScrollView style={this.props.style}>
    {detailCells}
  </ScrollView>
)

...
```

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/6fbe6a694493f04bdb054dcaf44535d4508332f5)

## 12. Oh, Beauty  

It is your turn.

- Change the style better

![Prettier](/screenshots/prettier.png)

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/082f3bf3d1d81e1366126f918188a47daa4d0a31)

## 13. Change each icon of coins

Let's make look and feel for your application using icon of coins.

#### libs/Constants.js

Make function to get icon uri from name of coin.

```js
/**
  Icons from: https://github.com/cjdowner/cryptocurrency-icons/tree/master/32%402x/icon
*/
export function getCoinIconUri(coinName) {
  switch (coinName) {
    case 'Bitcoin':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';

    case 'Ethereum':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';

    case 'Ripple':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';

    case 'Bitcoin Cash':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/bcc@2x.png?raw=true';

    case 'Litecoin':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';

    default:
      return 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
  }
}
```

#### components/CoinDetail.js

Ready to get iconUri from props.

```js
...

<Image
style={{width: 50, height: 50, marginRight: 5, marginLeft: 5}}
source={{uri: this.props.iconUri}}
/>

...
```

#### components/CoinView.js

Add `iconUri={getCoinIconUri(name)}` for the `CoinDetail` child component.

```js
...

import { getCoinIconUri } from '../libs/Constants';

...

render () {
  let detailCells = this.state.coinDatas.map( (data, index) => {
    const {rank, name, price_usd, market_cap_usd, last_updated} = data; // Destructuring
    return (
      <CoinDetail
        key={index}
        rank={rank}
        name={name}
        price={price_usd}
        volumn={market_cap_usd}
        iconUri={getCoinIconUri(name)}
      />
    );
  });

  return (
    <ScrollView style={this.props.style}>
      {detailCells}
    </ScrollView>
  )
}

```
Refresh and check your icons!

#### Result

![ChangeIcon](/screenshots/changeIcons.png)

[Source](https://github.com/JeffGuKang/ReactNative-Tutorial/commit/fc4bc840d32d691f07c2312f9738d3688b1bc42a)

# What’s Next

- Change each icon of coins
- Apply Refresh Button on `TopBar`
- Show more `Detail` when clicked each rows  
- Use [`ListView`](https://facebook.github.io/react-native/docs/listview.html) instead of a `CoinDetail` component
- Make release version for application store from `Expo` or export from `Expo`
