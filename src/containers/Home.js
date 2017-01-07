import React, { Component } from 'react'
import TabView from 'react-native-scrollable-tab-view'

import colors from '../colors'
import { NAVBARHEIGHT } from '../constants'
import Playlist from './Playlist'

const styles = {}

const Home = () =>
  <TabView
    style={{marginTop: NAVBARHEIGHT}}
    tabBarActiveTextColor={'white'}
    tabBarUnderlineStyle={{backgroundColor: 'white'}}
    tabBarBackgroundColor={colors.SECONDARY}
    tabBarTextStyle={{fontWeight: 'bold', fontFamily: 'Lato-Bold', fontSize: 18}}
    tabBarInactiveTextColor={colors.FONTCOLOR}
  >
    <Playlist tabLabel="Playlist" />
    <Playlist tabLabel="Playlist1" />
  </TabView>

export default Home
