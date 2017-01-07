/**
 * @flow
 */

import React from 'react'
import { AppRegistry, StatusBar, View } from 'react-native';
import Root from './src'

const Main = () => <View>
  <StatusBar hidden />
  <Root />
  </View>

AppRegistry.registerComponent('music', () => Main);

export default Root
