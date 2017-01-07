import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import colors from './colors'
import App from './containers'

const navBarStyle = {
  backgroundColor: colors.SECONDARY,
  borderBottomWidth: 0
}

const titleStyle = {
  fontFamily: 'Lato-Bold',
  fontSize: 18,
  color: colors.FONTCOLOR
}

const Routes = () =>
    <Router>
        <Scene key='root' navigationBarStyle={navBarStyle} titleStyle={titleStyle}>
          <Scene key='app'
            component={App}
            title={'Aakash Music'}
            leftButtonImage={require('../images/settings.png')}
            onLeft={() => null}
            rightButtonImage={require('../images/search.png')}
            onRight={() => null}
          />
        </Scene>
    </Router>

export default Routes
