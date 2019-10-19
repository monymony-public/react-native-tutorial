import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import loading from './reducers/loading';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(loading, composeWithDevTools());

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
