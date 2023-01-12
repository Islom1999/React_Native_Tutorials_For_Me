import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

const DismissKeyboard = () => {
  return (
    <TouchableWithoutFeedback
        onPress={() => {
            Keyboard.dismiss()
            console.log('Keyboard Yopiladi')
        }}
    >
        <View
            style={{
                width :'80%', height: '50%', backgroundColor: '#aaa',
                alignItems:'center',
                justifyContent: 'center'
            }}
            
        >
            <Text>DismissKeyboard</Text>
            <TextInput style={{
                backgroundColor: '#ddd', padding: 5, fontSize:25, width: 250}}
            />
        </View>
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboard