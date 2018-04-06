import React, { Component } from 'react'
import { View } from 'react-native'

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ height: 100, width: 100, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      </View>
    )
  }
}
