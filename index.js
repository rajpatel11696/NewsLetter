/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/navigation/rootnavigation';
import configureStore from './src/store/configStore'
import {Provider} from 'react-redux'
const store = configureStore();

const ReduxApp = ()=>
    <Provider store={store}>
        <App/>
    </Provider>


AppRegistry.registerComponent(appName, () => ReduxApp);
