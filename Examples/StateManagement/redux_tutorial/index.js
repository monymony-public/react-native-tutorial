/**
 * @format
 */

import {AppRegistry} from 'react-native';
import EntryPoint from './app/EntryPoint';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => EntryPoint);
