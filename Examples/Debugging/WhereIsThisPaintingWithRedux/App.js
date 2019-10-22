/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ParallaxSwiper, ParallaxSwiperPage} from 'react-native-parallax-swiper';
import PaintingInfo from './components/PaintingInfo';
import PaintingImage from './components/PaintingImage';
import API from './lib/api';
import {connect} from 'react-redux';
import {toggle_loading} from './actions/creators';

const {width, height} = Dimensions.get('window');
const paintingIds = [436535, 436528, 436532];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }
  componentDidMount() {
    Promise.all(
      paintingIds.map(id => {
        API.get(`/objects/${id}`, {
          params: {
            results: 1,
            inc:
              'primaryImage,title,artistDisplayName,objectEndDate,repository',
          },
        })
          .then(result => result.data)
          .then(result => {
            this.setState({info: [...this.state.info, result]});
          });
      }),
    ).then(() => {
      setTimeout(() => {
        this.props.toggle_loading();
      }, 3000);
    });
  }
  myCustomAnimationValue = new Animated.Value(0);
  render() {
    return this.props.isLoading ? (
      <View style={[styles.spinnerContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ffff" />
      </View>
    ) : (
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
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

const mapStateToProps = state => ({isLoading: state.isLoading});

const mapDispatchToProps = dispatch => ({
  toggle_loading: () => dispatch(toggle_loading()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
