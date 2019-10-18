import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
  render() {
    return (
      <View style={styles.eachView} >
        <Text> 홈 화면 입니다.</Text>
        <Button
          title="챗 화면으로 가기"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
        <Button
          title="세팅 화면으로 가기"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    )
  }
}

class Chat extends Component {
  render() {
    return (
      <View style={styles.eachView} >
        <Text> 챗 화면 입니다.</Text>
        <Button
          title="홈 화면으로 가기"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={styles.eachView} >
        <Text> 세팅 화면 입니다.</Text>
        <Button
          title="홈 화면으로 가기"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const App = createStackNavigator(
  {
    Chat: {
      screen: Chat,
    },
    Home: {
      screen: Home,
    },
    Settings
  },
  {
    // index: 0,
    initialRouteName: 'Home',
    // headerMode: 'none',
  },
);

const AppContainer = createAppContainer(App);

export default () => (
  <AppContainer />
);

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  eachView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
