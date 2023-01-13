import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'

const SwitchNative = () => {
  
  const [isEnable, setIsEnable] = useState(false)
  const [isStorage, setIsStorage] = useState(false)

  return (
    <View>
      <View>
        <Text>Location is on</Text>
        <Switch
            trackColor={{true:'green', false:'red'}}
            thumbColor={isEnable ? 'yellow' : 'pink'}
            value={isEnable}
            ios_backgroundColor='red'
            onValueChange={() => {setIsEnable(someThing => !someThing)}}
        />
      </View>
      <View>
        <Text>Storage on</Text>
        <Switch
            trackColor={{true:'green', false:'red'}}
            thumbColor={isStorage ? 'yellow' : 'pink'}
            value={isStorage}
            ios_backgroundColor='red'
            onValueChange={() => {setIsStorage(storage => !storage)}}
        />
      </View>
    </View>
  )
}

export default SwitchNative