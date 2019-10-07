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

const {width, height} = Dimensions.get('window');

export default class App extends React.Component {
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
        showProgressBar={true}
        progressBarBackgroundColor="rgba(0,0,0,0.25)"
        progressBarValueBackgroundColor="white">
        <ParallaxSwiperPage
          BackgroundComponent={
            <PaintingImage id={436535} width={width} height={height} />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <PaintingInfo id={436535} />
            </View>
          }
        />
        <ParallaxSwiperPage
          BackgroundComponent={
            <PaintingImage id={436528} width={width} height={height} />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <PaintingInfo id={436528} />
            </View>
          }
        />
        <ParallaxSwiperPage
          BackgroundComponent={
            <PaintingImage id={436532} width={width} height={height} />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <PaintingInfo id={436532} />
            </View>
          }
        />
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
