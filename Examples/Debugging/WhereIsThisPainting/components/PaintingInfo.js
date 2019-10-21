import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';

class PaintingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      id: this.props.id,
      title: this.props.title,
      artist: this.props.artist,
      year: this.props.year,
      location: this.props.location,
    };
  }

  _onPressToggle = () => {
    this.setState({isPressed: !this.state.isPressed});
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPressIn={this._onPressToggle}
          style={styles.touchable}
          underlayColor="#FFFFFF00">
          <View style={styles.button}>
            <Text style={styles.welcome}>
              {!this.state.isPressed
                ? 'Where is this painting on display?'
                : `Title: ${this.state.title}\nArtist: ${
                    this.state.artist
                  }\nYear: ${this.state.year}\nLocation: ${
                    this.state.location
                  }`}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF00',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF00',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    padding: 10,
  },
  touchable: {borderRadius: 100, backgroundColor: '#FFFFFF00'},
  button: {
    backgroundColor: '#FFFFFF00',
    borderRadius: 100,
    height: 200,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PaintingInfo;
