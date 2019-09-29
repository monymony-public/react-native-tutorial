/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Image,
  Dimensions,
} from 'react-native';

import {ParallaxSwiper, ParallaxSwiperPage} from 'react-native-parallax-swiper';
import PaintingInfo from './components/PaintingInfo';

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
            <Image
              style={styles.backgroundImage}
              source={{
                uri:
                  'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-1.jpg?t=1544067607&',
              }}
            />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <PaintingInfo index={0} />
            </View>
          }
        />
        <ParallaxSwiperPage
          BackgroundComponent={
            <Image
              style={styles.backgroundImage}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/f/f2/El_beso%28Gustav_Klimt%29.jpg',
              }}
            />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <PaintingInfo index={1} />
            </View>
          }
        />
        <ParallaxSwiperPage
          BackgroundComponent={
            <Image
              style={styles.backgroundImage}
              source={{
                uri:
                  'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-17.jpg?t=1544067607&',
              }}
            />
          }
          ForegroundComponent={
            <View style={styles.foregroundTextContainer}>
              <PaintingInfo index={2} />
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
