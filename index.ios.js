/**
 * @flow
 */

import React from 'react'
import { AppRegistry, StatusBar, View } from 'react-native';
import Root from './src'

const Main = () => <StatusBar hidden />

AppRegistry.registerComponent('music', () => Root);

export default Root
