import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';

const info = [
  `
Title : Mona Lisa
Artist : Leonardo da Vinci
Location : Louvre museum, Paris
`,
  `
Title : Liebespaar
Artist : Gustav Klimt
Location : osterreichische galerie belvedere, Austria
`,
  `
Title : The Son of Man
Artist : René Magritte
Location : Private Collection
`,
];

class PaintingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      index: this.props.index,
    };
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
                : info[this.state.index]}
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
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF00',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
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
