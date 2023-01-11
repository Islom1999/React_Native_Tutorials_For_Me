import { View, Text, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const NativeAlert = () => {

  const [name, setName] = useState('')

  return (
    <View style={styles.inputContainer}>
        <Text style={styles.text}>By Order</Text>
        <TextInput 
            style={styles.input}
            placeholder='Enter Name'
            onChangeText={(text) => setName(text)}
        />
        <TextInput 
            style={styles.input}
            placeholder='Enter Phone' 
            keyboardType={'phone-pad'}
        />
        <Button 
            title='Order'
            onPress={() => {
                Alert.alert(`Hurmatli ${name} zakazingiz qabul qilindi`)
            }}
        />
    </View>
  )
}

export default NativeAlert