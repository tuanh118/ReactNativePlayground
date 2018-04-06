import React, { Component } from 'react'
import { View, TextInput, ToastAndroid } from 'react-native'

interface ToastAndroidBasicsState {
  text: string
}

export default class ToastAndroidBasics extends Component<{}, ToastAndroidBasicsState> {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  _toast = () => {
    /* ToastAndroid.show(this.state.text, ToastAndroid.SHORT) */
    ToastAndroid.showWithGravity(
      this.state.text,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    )
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder='Toast message'
          onChangeText={(text) => this.setState({ text })}
          onSubmitEditing={this._toast}
        />
      </View>
    )
  }
}
