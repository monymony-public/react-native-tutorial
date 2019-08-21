import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
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

    // setInterval(() => {
    //   this._getCoinDatas(10);
    //   console.log('toggled!');
    // }, 10000);
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

  _renderItem = ({item}) => {
    const {rank, name, price_usd, market_cap_usd, last_updated} = item; // Destructuring
    return (
      <CoinItem
        rank={rank}
        name={name}
        price={price_usd}
        volumn={market_cap_usd}
        iconUri={getCoinIconUri(name)}
      />
    );
  }

  render () {    
    return (      
      <FlatList 
        data={this.state.coinDatas}
        keyExtractor={(item) => item.name}
        renderItem={this._renderItem}
        refreshing={this.state.isLoading}
        onRefresh={this._getCoinDatas}      
      />
    )
  }
}

export default CoinView;