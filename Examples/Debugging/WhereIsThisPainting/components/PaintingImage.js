import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import API from '../lib/api';

const {width, height} = Dimensions.get('window');

class PaintingImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      id: this.props.id,
      info: {},
      width,
      height,
    };
  }

  async componentDidMount() {
    let info = await API.get(`/objects/${this.state.id}`, {
      params: {
        results: 1,
        inc: 'primaryImage',
      },
    });
    info = info.data;
    const imageURL = `${info.primaryImage}`;
    this.setState({
      ...this.state,
      info: {
        imageURL,
      },
    });
  }

  render() {
    return (
      <Image
        style={styles.backgroundImage}
        source={{
          uri: `${this.state.info.imageURL}`,
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
