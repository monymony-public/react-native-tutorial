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
    display: "flex",
    flexGrow: 1
  }
});

export default App;
