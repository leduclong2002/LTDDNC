/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import 'react-native-screens';
import 'react-native-safe-area-context';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
