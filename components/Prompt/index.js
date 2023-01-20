import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const Prompt = () => {

    const [name, setName] = useState('')

    const clickMe = () => {
        console.log('Clicked')
        Alert.prompt('Welcome', 'Please enter your name', [
            {
                text: 'Submit',
                onPress: (text) => setName(text) 
            },
            {
                text: 'Canel',
                onPress: () => console.log('Canel is Pressed')
            }], "plain-text", "Name"
        )
    }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button title='Click Me' onPress={clickMe} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    }
});

export default Prompt