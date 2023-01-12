import { View, Text, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
       console.log(number) 
    }, [number])

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 70}}>{number}</Text>
      <View style={{
        flexDirection: 'row'
      }}>
        <Text style={styles.btn}
            onPress={() => setNumber(number - 1)}
        >-</Text>
        <Text style={styles.btn}
            onPress={() => setNumber(number + 1)}
        >+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: 'blue',
        width: 50,
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 25,
        margin: 10
    }
});

export default Counter

