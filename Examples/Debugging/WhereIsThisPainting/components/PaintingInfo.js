import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import API from '../lib/api';

class PaintingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      id: this.props.id,
      info: {},
    };
  }

  async componentDidMount() {
    let info = await API.get(`/objects/${this.state.id}`, {
      params: {
        results: 1,
        inc: 'primaryImage,title,artistDisplayName,objectEndDate,repository',
      },
    });
    info = info.data;

    const imageURL = `${info.primaryImage}`;
    const title = `${info.title}`;
    const artist = `${info.artistDisplayName}`;
    const year = `${info.objectEndDate}`;
    const location = `${info.repository}`;

    this.setState({
      ...this.state,
      info: {
        imageURL,
        title,
        artist,
        year,
        location,
      },
    });
  }

  _onPressIn = () => {
    this.state.isPressed
      ? this.setState({isPressed: false})
      : this.setState({isPressed: true});
  };

  _onPressOut = () => {
    this.state.isPressed
      ? this.setState({isPressed: true})
      : this.setState({isPressed: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}
          style={styles.touchable}
          underlayColor="#FFFFFF00">
          <View style={styles.button}>
            <Text style={styles.welcome}>
              {!this.state.isPressed
                ? 'Where is this painting on display?'
                : `Title: ${this.state.info.title}\nArtist: ${
                    this.state.info.artist
                  }\nYear: ${this.state.info.year}\nLocation: ${
                    this.state.info.location
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
