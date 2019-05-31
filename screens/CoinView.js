import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CoinItem from '../components/CoinItem';
import { getCoinIconUri } from '../libs/Constants';

class CoinView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinDatas: [],
      isLoading: false,
    };

    // TODO: Toggle the state every second

  }

  componentDidMount() { // After component mounted
    this._getCoinDatas(10);

    setInterval(() => {
      this._getCoinDatas(10);
      console.log('toggled!');
    }, 10000);
  }

  _getCoinDatas = async (limit) => {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`);
      const responseJson = await response.json();

      const date = new Date();
      const now = date.toLocaleString()

      if (this.props.refreshDate != null) {
        this.props.refreshDate(now); // Run func type props
      }

      await this.setState({
        coinDatas: responseJson,
        isLoading: false,
      });

    } catch(error) {
      console.error('_getCoinDatas', error);
    }
  }

  render () {
    let coinItems = this.state.coinDatas.map( (data, index) => {
      const {rank, name, price_usd, market_cap_usd, last_updated} = data; // Destructuring
      return (
        <CoinItem
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
        {coinItems}
      </ScrollView>
    )
  }
}

export default CoinView;