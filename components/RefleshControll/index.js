import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'

const RefleshControll = () => {

  const [refresh, setRefresh] = useState(false)

  const pullMe = () => {
    setRefresh(true)

    setTimeout(() => {
        setRefresh(false)
    }, 3000)
  }

  return (
    <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow',

    }}>
      <ScrollView>
        <RefreshControl 
            refreshing={refresh}
            onRefresh={() => pullMe()}
        />
        <Text style={{textAlign: 'center', paddingVertical: 600}}>This is refresh</Text>
      </ScrollView>
    </View>
  )
}

export default RefleshControll