import { View, TextInput, Button, Text, InputAccessoryView } from 'react-native'
import React, {useState} from 'react'

const InputAccessory = () => {

  const [fullname, setFullName] = useState("")

  return (
    <View>
      <TextInput placeholder='Enter Fullname ... '  
        style={{
            borderBottomWidth: 1,
            borderColor: 'black',
            width: 250,
            backgroundColor: '#ddd',
            padding: 5,
            marginVertical: 20,
        }}
        onChangeText={(text) => setFullName(text)}
        value={fullname}
        inputAccessoryViewID='id'
      />

      <InputAccessoryView nativeID='id'/>
      <View>
        <Text>My name is {fullname}</Text>
      </View>

      <Button title='clear Text' onPress={() => setFullName('')}/>

    </View>
  )
}

export default InputAccessory