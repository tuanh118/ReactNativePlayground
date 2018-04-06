import React, { Component } from 'react'
import { View, TextInput, ToastAndroid, ProgressBarAndroid } from 'react-native'

interface ProgressBarAndroidBasicsState {
  progress: number,
  isProgressShown: boolean,
}

export default class ProgressBarAndroidBasics extends Component<{}, ProgressBarAndroidBasicsState> {
  constructor(props) {
    super(props)
    this.state = { progress: 0, isProgressShown: false }
  }

  _showProgressBar = () => {
    this.setState({ isProgressShown: true })
  }

  render() {
    const progressBar = this.state.isProgressShown && (
      <ProgressBarAndroid
        styleAttr='Horizontal'
        indeterminate={false}
        progress={this.state.progress}
        color='teal'
      />
    )

    return (
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder='Progress input'
          onChangeText={(progress) => this.setState({ progress: parseInt(progress, 10) })}
          onSubmitEditing={this._showProgressBar}
        />
        {progressBar}
      </View>
    )
  }
}
