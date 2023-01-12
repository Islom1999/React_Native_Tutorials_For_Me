import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        width: '90%',
        height: '90%',
        backgroundColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    box1: {
        flex: 1,  // 1 * x
        width: '100%',
        backgroundColor: '#ff0000',
    },
    box2: {
        flex: 2, // 2 * x
        width: '100%',
        backgroundColor: '#00ff00',
    },
    box3: {
        flex: 1, // 1 * x
        width: '100%',
        backgroundColor: '#0000ff',
    }
});

export default FlexBox