import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const PrisableNative = () => {

  const [count, setCount] = useState(0)

  return (
    <View>
      <Text>{count}</Text>
      <Pressable style={
        ({pressed}) => [{backgroundColor: pressed ? 'red' : 'blue'}]
      }>
        { ({pressed}) => <Text style={styles.btn}>{pressed ? 'Pressed' : 'Press me'}</Text>}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
        width: 100,
        height: 50,
    }
});

export default PrisableNative