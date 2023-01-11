import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Lists = () => {
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
        <ScrollView>
        {fruit.map((item, index) => (
            
                <View key={index} style={{
                    marginVertical: 20, backgroundColor: 'blue', 
                    width: '100%', paddingVertical: 20}}
                >
                    <Text style={{
                        fontSize: 30, color: 'white', textAlign: 'center',}}
                    >{item.name}</Text>
                </View>

        ))}
        </ScrollView>
    </View>
  )
}

export default Lists