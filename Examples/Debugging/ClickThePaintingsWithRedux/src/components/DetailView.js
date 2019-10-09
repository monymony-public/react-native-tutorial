import React from 'react';
import {View, StyleSheet, Text, Button, Image, Dimensions} from 'react-native';
import {withRouter} from 'react-router-native';

const deviceWidth = Dimensions.get('window').width;

const DetailView = ({match, history, paintings}) => {
  const handleBack = () => {
    history.goBack();
  };
  const index = match.params.id;

  const {
    title = '',
    constituents = [],
    primaryImageSmall = '',
    objectDate = '',
    medium = '',
    dimensions = '',
    tags = [],
  } = paintings[index];
  return (
    <>
      <View>
        <Button onPress={handleBack} title="Back" />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.subheading}>{constituents[0].name}</Text>
        <Image style={styles.img} source={{uri: primaryImageSmall}} />
        <View style={styles.subcontainer}>
          <Text>Created at: {objectDate}</Text>
          <Text>Medium: {medium}</Text>
          <Text>Dimensions: {dimensions}</Text>
          <Text>Tags: {tags.map(t => t + ' ')}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  heading: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
  },
  subcontainer: {
    margin: 30,
    alignItems: 'flex-start',
  },
  img: {
    height: (deviceWidth * 2) / 3,
    width: (deviceWidth * 2) / 3,
    borderRadius: 20,
  },
});
export default withRouter(DetailView);
