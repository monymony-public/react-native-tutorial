import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home'

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
  }
})

const AppContainer = createAppContainer(MainStack)

const App = () => {
  return (
    <AppContainer />
  )
}

export default App
