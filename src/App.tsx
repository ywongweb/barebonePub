import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
  },
  text: {
    color: 'blue',
  },
})
export const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </View>
  )
}
