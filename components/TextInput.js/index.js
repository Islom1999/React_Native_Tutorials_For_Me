import { View, TextInput, Button, Text } from 'react-native'
import React, {useState} from 'react'

const ScrollAndList = () => {

  const [fullname, setFullName] = useState("...")
  const [age, setAge] = useState('...')

  return (
    <View>
      <TextInput placeholder='Enter Fullname ... '  
        style={{
            borderBottomWidth: 1,
            borderColor: 'black',
            width: 250,
            backgroundColor: '#ddd',
            padding: 5,
            marginVertical: 20,}}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput placeholder='Enter Age ... '  
        style={{
            borderBottomWidth: 1,
            borderColor: 'black',
            width: 250,
            backgroundColor: '#ddd',
            padding: 5,
            marginVertical: 20,}}
        onChangeText={(text) => setAge(text)}
        keyboardType='numeric'
      />

      <View>
        <Text>My name is {fullname}</Text>
        <Text>I am {age} years old</Text>
      </View>

    </View>
  )
}

export default ScrollAndList