import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TouchableNative = () => {
  const [people, setPeople] = useState([
    {name: 'Islom', key: 1},
    {name: 'Abbos', key: 2},
    {name: 'Aminullo', key: 3},
    {name: 'Aziz', key: 4},
    {name: 'Hijiakbar', key: 5},
    {name: 'Jamshid', key: 6},
    {name: 'Roziq', key: 7},
  ])

  const pressHandler = (name) => {
    console.log(name)
  }

  return (
    <View style={{width: '80%'}}>
      
        <FlatList 
            keyExtractor={(item) => item.key}
            data={people}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    onPress={() => pressHandler(item.name)}
                >
                    <View style={{
                        marginVertical: 20, backgroundColor: 'blue', 
                        width: '100%', paddingVertical: 20}}
                    >
                        <Text style={{
                            fontSize: 30, color: 'white', textAlign: 'center',}}
                        >{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
      
    </View>
  )
}

export default TouchableNative