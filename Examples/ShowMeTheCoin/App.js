import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home'
import Youtube from './screens/Youtube';

const Header = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
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

const AppContainer = createAppContainer(MainStack)

const App = () => {
  return (
    <AppContainer />
  )
}

export default App
