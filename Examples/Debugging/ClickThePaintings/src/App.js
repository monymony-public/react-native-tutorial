import React from 'react';
import TopBar from '@/components/TopBar';
import DetailView from '@/components/DetailView';
import ListView from '@/components/ListView';
import {StyleSheet, ScrollView} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <ScrollView style={styles.container}>
        <TopBar />
        <Route path="/" exact component={ListView} />
        <Route path="/detail/:id" component={DetailView} />
      </ScrollView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
