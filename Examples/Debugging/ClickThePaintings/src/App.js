import React, {useState} from 'react';
import {NativeRouter, Route} from 'react-router-native';
import TopBar from '@/components/TopBar';
import DetailView from '@/components/DetailView';
import ListView from '@/components/ListView';
import {StyleSheet, ScrollView} from 'react-native';

const App = () => {
  const [isDetail, setIsDetail] = useState(false);
  const detailRoute = bool => {
    setIsDetail(bool);
  };
  return (
    <NativeRouter>
      <ScrollView style={styles.container}>
        {isDetail ? <TopBar topStr="Painting Detail" /> : <TopBar />}
        <Route
          path="/"
          exact
          render={() => <ListView detailRoute={detailRoute} />}
        />
        <Route
          path="/detail/:id"
          component={({nativeHistory}) => (
            <DetailView detailRoute={detailRoute} history={nativeHistory} />
          )}
        />
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
