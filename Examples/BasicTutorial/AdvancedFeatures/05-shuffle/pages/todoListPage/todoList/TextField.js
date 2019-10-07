import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextField = ({ onTextChange, value, onSubmitEnd, onShuffleClick }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add an item!"
        style={styles.input}
        value={value}
        onChangeText={onTextChange}
        onSubmitEditing={onSubmitEnd}
        placeholderTextColor={'#999'}
      />

      <TouchableOpacity style={styles.shuffle} onPress={onShuffleClick}>
        <Icon name="random" size={30} color="#3143e8" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white'
  },
  input: {
    flexGrow: 1,
    fontSize: 24,
  },
  shuffle: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TextField;
