import { Dimensions, Platform } from 'react-native'

export const VIEWPORT = Dimensions.get('window')
export const NAVBARHEIGHT = Platform.OS === 'ios' ? 64 : 54
