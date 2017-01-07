import React, { Component } from 'react'
import {
  BackAndroid,
  StyleSheet,
  Platform,
  View
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import colors from '../colors'
import Home from './Home'


class App extends Component {
  init = () => {
    this.registerBackButtonAndroid()
  }

  registerBackButtonAndroid = () => {
    BackAndroid.addEventListener('hardwareBackPress', function() {
      try {
        Actions.pop();
        return true;
      }
      catch (err) {
        return false;
      }
    })
  }

  componentWillMount = this.init

  render = () =>
    <View style={styles.container}>
      <Home />
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND
  }
})

export default App
