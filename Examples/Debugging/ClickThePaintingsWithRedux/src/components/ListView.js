import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Link} from 'react-router-native';

const deviceWidth = Dimensions.get('window').width;

const ListView = ({paintings}) => {
  const imgList = paintings.map((item, index) => (
    <TouchableOpacity
      style={styles.row}
      key={item.objectID}
      activeOpacity={0.75}>
      <Link to={`/detail/${index}`}>
        <Image
          key={item.objectID}
          source={{uri: item.primaryImageSmall}}
          resizeMode="cover"
          style={styles.image}
        />
      </Link>
    </TouchableOpacity>
  ));

  return <View style={styles.container}>{imgList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: deviceWidth,
    height: deviceWidth / 2,
    marginBottom: 15,
  },
  image: {
    width: deviceWidth / 2,
    height: deviceWidth / 2,
    borderRadius: 20,
  },
});

export default ListView;
