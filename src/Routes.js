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
            titleStyle={{fontSize: 20, fontFamily: 'Lato-Bold'}}
            titleWrapperStyle={{top: 12}}
            leftButtonImage={require('../images/settings.png')}
            leftButtonIconStyle={{width: 28, height: 28, resizeMode: 'contain'}}
            leftButtonStyle={{left: 10, top: 12}}
            onLeft={() => null}
            rightButtonImage={require('../images/search.png')}
            rightButtonIconStyle={{width: 28, height: 28, resizeMode: 'contain'}}
            rightButtonStyle={{right: 10, top: 12}}
            onRight={() => null}
          />
        </Scene>
    </Router>

export default Routes
