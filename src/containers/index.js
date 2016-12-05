import React, { Component } from 'react'
import {
  BackAndroid,
  StyleSheet,
  Platform,
  View
} from 'react-native'
// import { Actions } from 'react-native-router-flux'


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
      </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#70A1D7'
  }
})

export default App
