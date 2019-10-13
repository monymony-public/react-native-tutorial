import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="gray" style={styles.spinner} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
});
export default Loading;
