import React, {useEffect} from 'react';
import {Route} from 'react-router-native';
import {StyleSheet, ScrollView, View} from 'react-native';
import TopBar from '@/components/TopBar';
import DetailView from '@/components/DetailView';
import ListView from '@/components/ListView';
import connectStore from '@/hocs/connectStore';
import Loading from '@/components/Loading';

const App = props => {
  useEffect(() => {
    props.actions.fetchPaintings();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <TopBar />
      <Route
        path="/"
        exact
        render={() => <ListView paintings={props.paintings} />}
      />
      <Route
        path="/detail/:id"
        render={() => <DetailView paintings={props.paintings} />}
      />
      {props.isLoading && (
        <View style={styles.spinner}>
          <Loading />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    flex: 1,
    marginTop: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connectStore(App);
