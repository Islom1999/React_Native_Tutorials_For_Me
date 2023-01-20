import { View, Text } from 'react-native'
import React, {useState} from 'react'
import {Avatar} from '@rneui/themed'

const AvatarNative = () => {
  return (
    <View style={{justifyContent: 'center'}}>
        <Text>Avatar</Text>

        <Avatar
            size={64}
            rounded
            source={{ uri: "https://www.bhaktiphotos.com/wp-content/uploads/2021/07/Sivan-hd-Images-1080p.jpg" }}
        />

        <Avatar
            size={64}
            rounded
            containerStyle={{width: 200, height:200,}}
            source={{ uri: "https://replicate.delivery/mgxm/0958ab0c-8d26-45f8-a5f1-a27a1f2259cc/baby.jpg" }}
        />
        
    </View>
  )
}

export default AvatarNative