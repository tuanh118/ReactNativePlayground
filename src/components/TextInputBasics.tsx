import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

interface TextInputBasicsState {
  text: string
}

export default class TextInputBasics extends Component<{}, TextInputBasicsState> {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder='Type here to translate!'
          onChangeText={(text) => this.setState({ text })}
          onSubmitEditing={() => alert('submitted')}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}
