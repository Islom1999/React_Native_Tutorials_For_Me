import { View, Text, Modal, TextInput, StyleSheet, Button} from 'react-native'
import React, { useState } from 'react'

const ModalNative = () => {

  const [open, setOpen] = useState(false)
  const [name, setName] = useState()

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Enter Name ...' 
        onChangeText={(text) => {setName(text)}}
    />
      <Button title='Add'
        onPress={() => {setOpen(true)}}
      ></Button>
      <Modal
        visible={open}
      >
        <View style={styles.container}>
            <Text 
                style={{fontSize: 30, textAlign: 'center', paddingVertical: 200}}
            >Assalomu Aleykum {name}</Text>
            <Button title='Close'
                onPress={() => {setOpen(false)}}
            ></Button>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#aaa"
    },
    input: {
        width: 300,
        backgroundColor: "#ddd",
        fontSize: 25,
        padding: 10,
        marginVertical: 10,
    },
});

export default ModalNative