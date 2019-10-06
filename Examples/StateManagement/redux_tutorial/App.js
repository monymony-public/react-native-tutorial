import React from 'react';
import EntryPoint from './app/EntryPoint';

import { createStore } from 'redux';
import reducers from './app/reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

const App = () => {
    return (
        <Provider store={store}>
            <EntryPoint />
        </Provider>
    );
}

export default App;
