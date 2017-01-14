/**
 * @flow
 */

import React from 'react'
import { AppRegistry, StatusBar, View } from 'react-native';
import Root from './src'

const Main = () => <View style={{flex: 1}}>
  <StatusBar hidden />
  <Root />
</View>

AppRegistry.registerComponent('music', () => Main);

export default Root
