import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'

const FlatListReact = () => {
  const [fruit, setFruit] = useState([
    {name: 'apple'},
    {name: 'orange'},
    {name: 'purple'},
    {name: 'ananas'},
    {name: 'banana'},
    {name: 'banana'},
    {name: 'banana'},
    {name: 'banana'},
  ])
  return (
    <View style={{width: '80%', }}>
        <FlatList 
            keyExtractor={(item, index) => index}
            data={fruit}
            renderItem={({item, index}) => (
                <View style={{
                    marginVertical: 20, backgroundColor: 'blue', 
                    width: '100%', paddingVertical: 20}}
                >
                    <Text style={{
                        fontSize: 30, color: 'white', textAlign: 'center',}}
                    >{item.name}</Text>
                </View>
            )}
        />
    </View>
  )
}

export default FlatListReact