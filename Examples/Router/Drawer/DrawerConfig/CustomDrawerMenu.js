import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class CustomDrawerMenu extends Component {
  constructor() {
    super();
    this.items = [
      {
        navOptionIcon: 'home',
        navOptionName: 'HomeName',
        screenName: 'Home',
      },
      {
        navOptionIcon: 'info-circle',
        navOptionName: 'DetailName',
        screenName: 'Detail',
      },
      {
        navOptionIcon: 'user',
        navOptionName: 'AboutName',
        screenName: 'About',
      },
    ];
  }
  render() {
    return (
      <View style={styles.drawerContainer}>
        <Image
          source={require('./images/cat.jpeg')}
          style={styles.drawerProfileIcon}
        />
        <View style={{width: '100%'}}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: '#ffffff',
              }}
              key={key}>
              <View
                style={{
                  marginRight: 10,
                  marginLeft: 20,
                }}>
                <Icon name={item.navOptionIcon} size={25} color="#808080" />
              </View>
              <Text
                onPress={() => {
                  this.props.navigation.navigate(item.screenName);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#bbb',
    alignItems: 'center',
  },
  drawerProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
  },
});
