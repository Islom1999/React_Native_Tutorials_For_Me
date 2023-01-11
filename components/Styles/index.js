import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const NativeStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NativeStyle</Text>
    </View>
  )
}

export default NativeStyle