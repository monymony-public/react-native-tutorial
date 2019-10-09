/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import {ParallaxSwiper, ParallaxSwiperPage} from 'react-native-parallax-swiper';
import PaintingInfo from './components/PaintingInfo';
import PaintingImage from './components/PaintingImage';
import API from './lib/api';

const {width, height} = Dimensions.get('window');
const paintingIds = [436535, 436528, 436532];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }
  componentDidMount() {
    paintingIds.map(id => {
      API.get(`/objects/${id}`, {
        params: {
          results: 1,
          inc: 'primaryImage,title,artistDisplayName,objectEndDate,repository',
        },
      })
        .then(result => result.data)
        .then(result => {
          this.setState({info: [...this.state.info, result]});
        });
    });
  }
  myCustomAnimationValue = new Animated.Value(0);
  getPageTransformStyle = index => ({
    transform: [
      {
        scale: this.myCustomAnimationValue.interpolate({
          inputRange: [
            (index - 1) * (width + 8),
            index * (width + 8),
            (index + 1) * (width + 8),
          ],
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        rotate: this.myCustomAnimationValue.interpolate({
          inputRange: [
            (index - 1) * (width + 8),
            index * (width + 8),
            (index + 1) * (width + 8),
          ],
          outputRange: ['180deg', '0deg', '-180deg'],
          extrapolate: 'clamp',
        }),
      },
    ],
  });
  render() {
    return (
      <ParallaxSwiper
        speed={0.5}
        animatedValue={this.myCustomAnimationValue}
        dividerWidth={8}
        dividerColor="black"
        backgroundColor="black"
        onMomentumScrollEnd={activePageIndex => console.log(activePageIndex)}
        progressBarBackgroundColor="rgba(0,0,0,0.25)"
        progressBarValueBackgroundColor="white">
        {this.state.info.map((element, index) => (
          <ParallaxSwiperPage
            BackgroundComponent={
              <PaintingImage
                id={element.ojbectId}
                width={width}
                height={height}
                imageURL={element.primaryImage}
              />
            }
            ForegroundComponent={
              <View style={styles.foregroundTextContainer}>
                <PaintingInfo
                  id={element.objectId}
                  title={element.title}
                  artist={element.artistDisplayName}
                  year={element.objectEndDate}
                  location={element.repository}
                />
              </View>
            }
            key={index}
          />
        ))}
      </ParallaxSwiper>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width,
    height,
    resizeMode: 'cover',
  },
  foregroundTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  foregroundText: {
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: 0.41,
    color: 'white',
  },
});
