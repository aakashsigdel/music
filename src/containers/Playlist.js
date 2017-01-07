import React, { Component } from 'react'
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

class Playlist extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.dataSource = ds.cloneWithRows(['aakash', 'sigdel'])
  }

  renderRow = playlist =>
    <TouchableOpacity key={playlist}>
      <Text>{playlist}</Text>
    </TouchableOpacity>

  render = () =>
    <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
}

export default Playlist
