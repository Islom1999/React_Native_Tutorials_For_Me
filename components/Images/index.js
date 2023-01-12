import { View, Text, Image } from 'react-native'
import React from 'react'

const Images = () => {
  return (
    <View>
      <Image source={require('./1.jpg')}/>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}} 
        style={{width: 400, height: 400}} 
      />
    </View>
  )
}

export default Images