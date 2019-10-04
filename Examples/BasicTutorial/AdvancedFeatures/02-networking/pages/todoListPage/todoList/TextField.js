import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const TextField = ({ onTextChange, value, onSubmitEnd }) => {
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
  }
});

export default TextField;
