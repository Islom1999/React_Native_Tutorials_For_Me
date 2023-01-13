import { View, Text, SectionList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const SectionListNative = () => {
  
  const [data, setData] = useState([
    {
        title: 'Main Items',
        data: ["Pizza", "Burger"]
    },
    {
        title: 'Sides',
        data: ["French Fries", "Onion Rings"]
    },
    {
        title: 'Drinks',
        data: ["Coca Cola", "Fanta"]
    },
    {
        title: 'Deserts',
        data: ["Ice Cream", "Cake"]
    },
    {
        title: 'AnySome',
        data: ["Ice Cream", "Cake"]
    },
  ])

  const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.text}>{title}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text>SectionListNative</Text>
      <SectionList 
        sections={data}
        keyExtractor={(item, index) => item+index}
        renderItem={({item}) => <Item title={item}/>}
        renderSectionHeader={({section: {title}}) => (
            <View style={styles.title}>
                <Text style={styles.text}>{title}</Text>
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    title: {
        backgroundColor: 'red',
        width: '90%',
        paddingVertical: 10,
        marginTop: 10,
    },
    item: {
        backgroundColor: 'yellow',
        width: '90%',
        paddingVertical: 10,
    },
    text: {
        fontSize: 25,
        textAlign: 'center'
    }
});

export default SectionListNative