---
layout: default
title: 12. 코인 아이콘 알맞게 바꾸기
parent: 실시간 코인 정보 앱
grand_parent: Make Sample Apps(한글)
nav_order: 12
---

## 12. Change each icon of coins

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

    case 'XRP':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';

    case 'EOS':
        return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true';

    case 'Bitcoin Cash':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/bcc@2x.png?raw=true';

    case 'Litecoin':
      return 'https://github.com/cjdowner/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';

    default:
      return 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
  }
}
```

#### components/CoinItem.js

Ready to get iconUri from props.

```js
...

<Image
style={{width: 50, height: 50, marginRight: 5, marginLeft: 5}}
source={{uri: this.props.iconUri}}
/>

...
```

screens/CoinView.js

Add `iconUri={getCoinIconUri(name)}` to the `CoinItem` child component.

```js
...

import { getCoinIconUri } from '../libs/Constants';

...

render () {
  let detailCells = this.state.coinData.map( (data, index) => {
    const {rank, name, price_usd, market_cap_usd, last_updated} = data; // Destructuring
    return (
      <CoinItem
        key={index}
        rank={rank}
        name={name}
        price={price_usd}
        volume={market_cap_usd}
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