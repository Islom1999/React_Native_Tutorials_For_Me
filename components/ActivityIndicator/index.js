import { View, Text, ActivityIndicator, Button } from 'react-native'
import React, { useState } from 'react'

const IndicatorAcrivity = () => {

  const [isIndikator, setIsIndikator] = useState(false)

  return (
    <View>
      <Text>AcrivityIndicator</Text>
      <ActivityIndicator 
        size={'large'} 
        color="orange" 
        animating={isIndikator}
      />
      <Button title="start"
        onPress={() => setIsIndikator(true)}
      ></Button>
      <Button title="end"
        onPress={() => setIsIndikator(false)}
      ></Button>
    </View>
  )
}

export default IndicatorAcrivity