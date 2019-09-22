import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TodoListPage } from "./pages/todoListPage";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoListPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1
  }
});

export default App;
