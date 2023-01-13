import { View, Text, Appearance, TextInput } from 'react-native'
import React, { useState } from 'react'

const AppearnseNative = () => {

    const colorSchame = Appearance.getColorScheme()
    const [name, setName] = useState()
    const [age, setAge] = useState()

  return (
    <View style={{
        width: '100%',
        height: '80%',
        padding: 20,
        backgroundColor:colorSchame==='light' ? 'white' : 'gray'
      }}>
      <Text>AppearnseNative</Text>
      <TextInput 
        onChangeText={(text) => setName(text)}
        style={{
            width: 250,
            margin: 20,
            backgroundColor:colorSchame==='light' ? 'gray' : 'white',
            color:colorSchame==='light' ? 'white' : 'black',
        }}
      />
      <TextInput 
        onChangeText={(text) => setAge(text)}
        style={{
            width: 250,
            margin: 20,
            backgroundColor:colorSchame==='light' ? 'gray' : 'white',
            color:colorSchame==='light' ? 'white' : 'black',
        }}
      />

    <Text style={{
        width: 250,
        margin: 20,
        backgroundColor:colorSchame==='light' ? 'gray' : 'white',
        color:colorSchame==='light' ? 'black' : 'white',
      }}>{name} : {age}</Text>

    </View>
  )
}

export default AppearnseNative