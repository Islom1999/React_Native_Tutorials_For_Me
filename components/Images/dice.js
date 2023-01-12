import { View, Text, Image, Button } from 'react-native'
import React, { useState } from 'react'

const DiceApp = () => {

    const [image, setImage] = useState(0)
    const [imageSrc, setImageSrc] = useState([
        {image: require('./image/dice1.png')},
        {image: require('./image/dice2.png')},
        {image: require('./image/dice3.png')},
        {image: require('./image/dice4.png')},
        {image: require('./image/dice5.png')},
        {image: require('./image/dice6.png')},
    ])

  return (
    <View style={{
        width: '100%', height: '100%', backgroundColor: 'orange', 
        alignItems: 'center', justifyContent: 'center'}}
    >
      <Image source={imageSrc[image].image} style={{width: 200, height: 200,}}/>
      <Text 
        style={{
            backgroundColor: 'blue', fontSize: 30, color: 'white', padding: 10, 
            textTransform: 'uppercase', marginVertical :10,}}
        onPress={() => {setImage(Math.ceil(Math.random()*5));  console.log(image)}}
      >Run</Text>
    </View>
  )
}

export default DiceApp