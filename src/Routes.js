import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import App from './containers'

const Routes = () =>
    <Router>
        <Scene key='root'>
            <Scene key='app' component={App} hideNavBar />
        </Scene>
    </Router>

export default Routes
