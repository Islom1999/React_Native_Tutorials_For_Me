import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'

const TouchableFeedback = () => {

    const [rippleColor, setRippleColor] = useState('red')
    const [rippleOverPlow, setRippleOverflow] = useState(false)

  return (
    <View>
      <TouchableNativeFeedback
        onPress={() => {setRippleOverflow(!rippleOverPlow); console.log(rippleOverPlow)}}
        backgroundColor={TouchableNativeFeedback.Ripple('blue', rippleOverPlow)}
      >
        <View style={styles.container}>
            <Text>TouchableFeedback</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default TouchableFeedback

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 500, 
        backgroundColor: 'pink',
    }
});