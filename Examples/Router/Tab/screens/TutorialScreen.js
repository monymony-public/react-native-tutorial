import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class ChatScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _goToTab() {
    // do something
    this.props.navigation.replace('TabNavigator');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>React Native Tutorial</Text>
        </View>
        <View style={styles.formArea}>
          <TextInput style={styles.textForm} placeholder={'ID'} />
          <TextInput style={styles.textForm} placeholder={'Password'} />
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._goToTab.bind(this)}>
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: '10%',
    paddingRight: '10%',
    justifyContent: 'center',
  },
  titleArea: {
    width: '100%',
    padding: '10%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  formArea: {
    width: '100%',
    paddingBottom: '10%',
  },
  textForm: {
    borderWidth: 1,
    borderColor: '#888',
    width: '100%',
    height: '10%',
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
  },
  buttonArea: {
    width: '100%',
    height: '5%',
  },
  button: {
    backgroundColor: '#633689',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'white',
  },
});

export default ChatScreen;
