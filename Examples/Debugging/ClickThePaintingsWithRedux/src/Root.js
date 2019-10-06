import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from '@/App';
import reducers from '@/data/rootReducers';
import {NativeRouter, nativeHistory} from 'react-router-native';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const Root = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <NativeRouter history={nativeHistory}>
      <App />
    </NativeRouter>
  </Provider>
);

export default Root;
