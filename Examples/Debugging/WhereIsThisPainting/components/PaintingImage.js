import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

class PaintingImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: this.props.imageURL,
      width,
      height,
    };
  }

  render() {
    return (
      <Image
        style={styles.backgroundImage}
        source={{
          uri: `${this.state.imageURL}`,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width,
    height,
    resizeMode: 'cover',
  },
});

export default PaintingImage;
