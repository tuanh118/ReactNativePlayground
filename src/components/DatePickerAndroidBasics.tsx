import React, { Component } from 'react'
import { View, Text, Button, DatePickerAndroid } from 'react-native'

interface DatePickerAndroidBasicsState {
  year: number,
  month: number,
  day: number,
}

export default class DatePickerAndroidBasics extends Component<{}, DatePickerAndroidBasicsState> {
  constructor(props) {
    super(props)
    this.state = { year: 1900, month: 2, day: 1 }
  }

  _invokeDatePicker = async () => {

    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(this.state.year, this.state.month, this.state.day)
      })

      alert(action)

      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          year, month, day
        })
      }
    } catch ({ code, message }) {
      alert(`Cannot open date picker ${message}`)
    }
  }

  render() {
    const { year, month, day } = this.state

    return (
      <View style={{ padding: 10 }}>
        <Button
          title='Pick a Date'
          onPress={this._invokeDatePicker}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {`${year} - ${month + 1} - ${day}`}
        </Text>
      </View>
    )
  }
}
