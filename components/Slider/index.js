import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Slider from '@react-native-community/slider'

const SliderNative = () => {
    
    const [range, setRange] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 40,}}>Value</Text>
      <Text style={{textAlign: 'center', fontSize: 40,}}>{range}</Text>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#00FF00"
        maximumTrackTintColor="#0000FF"
        onValueChange={(value) => setRange(Math.floor(value*100))}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        with: "90%", 
        height: 50,
    }
});

export default SliderNative