import { View, Text, Button } from 'react-native'
import React from 'react'

const component = () => {
  return (
    // this is view
    <View style={{
        backgroundColor: 'red', height: 150, width: 250, 
        alignItems: 'center', justifyContent: 'center'
    }}>

      <Text style={{
        color: 'green', fontSize: 30, fontStyle: 'italic', 
        fontWeight: 'bold', letterSpacing: 5}}
      >This is Text</Text>    

      <Button title='Bu Tugmacha'
        disabled={true}
        onPress={() => {console.warn('birinchi tugma bosildi')}}
      />

    <Button title='bu ham tugma' 
        style={{backgroundColor: 'green'}} backgroundColor={'green'}
        onPress={() => {console.warn('ikkinchi tugma bosildi')}}
    ></Button>
    
    </View>
  )
}

export default component